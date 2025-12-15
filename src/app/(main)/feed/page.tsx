"use client";

import { CreatePost } from "@/components/feed/CreatePost";
import { FeedPost } from "@/components/feed/FeedPost";
import { StoriesSection } from "@/components/feed/StoriesSection";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Sparkles } from "lucide-react";
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
    const supabase = createClient();

    const fetchPosts = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) setCurrentUserId(user.id);

            const { data, error } = await supabase
                .from('posts')
                .select(`
                    *,
                    profiles (full_name, username, avatar_url),
                    tasks (id, text, is_completed),
                    likes (count),
                    comments (count)
                `)
                .order('created_at', { ascending: false });

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
    }, []);

    return (
        <div className="w-full pb-20">
            <div className="sticky top-0 z-20 bg-black/60 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-6">
                    <button className="text-white font-bold text-lg border-b-2 border-primary pb-1">For You</button>
                    <button className="text-muted-foreground font-medium text-lg hover:text-white transition-colors pb-1">Following</button>
                </div>
            </div>

            <StoriesSection />

            <CreatePost onPostCreated={fetchPosts} />

            <div className="mt-6 space-y-6">
                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                ) : posts.length > 0 ? (
                    posts.map((post) => (
                        <FeedPost
                            key={post.id}
                            id={post.id}
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
                        <h3 className="text-xl font-bold text-white mb-2">No flows yet</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            Be the first to share your daily flow! Use the input above to create a post.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
