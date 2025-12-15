"use client";

import { CreatePost } from "@/components/feed/CreatePost";
import { FeedPost } from "@/components/feed/FeedPost";
import { FeedPostSkeleton } from "@/components/feed/FeedPostSkeleton";
import { StoriesSection } from "@/components/feed/StoriesSection";
import { createClient } from "@/lib/supabase/client";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface PostWithData {
    id: string;
    content: string;
    image_url: string | null;
    created_at: string;
    profiles: {
        full_name: string;
        username: string;
        avatar_url: string;
    };
    tasks: {
        id: string;
        text: string;
        is_completed: boolean;
    }[];
    likes: { count: number }[]; // Aggregate
    comments: { count: number }[]; // Aggregate
}

export default function FeedPage() {
    const [posts, setPosts] = useState<PostWithData[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentUserId, setCurrentUserId] = useState<string | undefined>(undefined);
    const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');
    const supabase = createClient();

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) setCurrentUserId(user.id);

            let query = supabase
                .from('posts')
                .select(`
                    *,
                    profiles (full_name, username, avatar_url),
                    tasks (id, text, is_completed),
                    likes (count),
                    comments (count)
                `)
                .order('created_at', { ascending: false });

            if (activeTab === 'following' && user) {
                // Fetch followings first
                const { data: follows } = await supabase
                    .from('follows')
                    .select('following_id')
                    .eq('follower_id', user.id);

                const followingIds = follows?.map(f => f.following_id) || [];

                if (followingIds.length > 0) {
                    query = query.in('user_id', followingIds);
                } else {
                    // Following no one, return empty
                    setPosts([]);
                    setLoading(false);
                    return;
                }
            }

            const { data, error } = await query;

            if (error) throw error;
            // @ts-ignore
            setPosts(data || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();

        const channel = supabase
            .channel('realtime posts')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, (payload) => {
                fetchPosts();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [activeTab]); // Refetch when tab changes

    return (
        <div className="w-full pb-20">
            <div className="sticky top-0 z-20 bg-black/60 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-6">
                    <button
                        onClick={() => setActiveTab('foryou')}
                        className={`font-bold text-lg pb-1 transition-colors ${activeTab === 'foryou' ? 'text-white border-b-2 border-primary' : 'text-muted-foreground hover:text-white'}`}
                    >
                        For You
                    </button>
                    <button
                        onClick={() => setActiveTab('following')}
                        className={`font-bold text-lg pb-1 transition-colors ${activeTab === 'following' ? 'text-white border-b-2 border-primary' : 'text-muted-foreground hover:text-white'}`}
                    >
                        Following
                    </button>
                </div>
            </div>

            <StoriesSection />

            <CreatePost onPostCreated={fetchPosts} />

            <div className="mt-6 space-y-6">
                {loading ? (
                    <>
                        <FeedPostSkeleton />
                        <FeedPostSkeleton />
                        <FeedPostSkeleton />
                    </>
                ) : posts.length > 0 ? (
                    posts.map((post) => (
                        <FeedPost
                            key={post.id}
                            id={post.id}
                            userId={
                                // @ts-ignore
                                post.user_id
                            }
                            currentUserId={currentUserId}
                            user={{
                                name: post.profiles?.full_name || 'Unknown User',
                                handle: post.profiles?.username || 'user',
                                avatar: post.profiles?.avatar_url || ''
                            }}
                            timestamp={new Date(post.created_at).toLocaleDateString()}
                            content={post.content}
                            tasks={post.tasks?.map(t => ({ id: t.id, text: t.text, completed: t.is_completed })) || []}
                            image={post.image_url || undefined}
                            stats={{
                                // @ts-ignore
                                likes: post.likes?.[0]?.count || 0,
                                // @ts-ignore 
                                comments: post.comments?.[0]?.count || 0
                            }}
                        />
                    ))
                ) : (
                    <div className="text-center py-20 px-4">
                        <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            {activeTab === 'following' ? "No following posts" : "No flows yet"}
                        </h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            {activeTab === 'following'
                                ? "Follow some creators to see their flows here."
                                : "Be the first to share your daily flow! Use the input above to create a post."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
