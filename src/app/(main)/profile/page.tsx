import { FeedPost } from "@/components/feed/FeedPost";
import { ExternalAwards } from "@/components/profile/ExternalAwards";
import { ProductivityHeatmap } from "@/components/profile/ProductivityHeatmap";
import { ProfileBadges } from "@/components/profile/ProfileBadges";
import { ProfileHeader } from "@/components/profile/ProfileHeader";

const ALL_POSTS = [
    {
        id: "p1",
        user: { name: "Ayush Kumar", handle: "ayush_builds", avatar: "A" },
        timestamp: "2h ago",
        content: "Just hit a 128 day streak on GitHub! 🚀 Consistency is the key to mastery. #coding #productivity",
        tasks: [],
        stats: { likes: 124, comments: 18 },
    },
    {
        id: "p2",
        user: { name: "Ayush Kumar", handle: "ayush_builds", avatar: "A" },
        timestamp: "Yesterday",
        content: "Crushed the backend integration today! 🚀\n\nFinally connected the Supabase auth with the new flow engine.",
        tasks: [
            { id: "t1", text: "Setup Supabase Auth", completed: true },
            { id: "t2", text: "Design Database Schema", completed: true },
            { id: "t3", text: "API Rate Limiting", completed: true },
        ],
        stats: { likes: 45, comments: 8 },
    },
    {
        id: "p3",
        user: { name: "Ayush Kumar", handle: "ayush_builds", avatar: "A" },
        timestamp: "2 days ago",
        content: "Learning Rust has been a humbling experience. The borrow checker is my new best friend (and worst enemy). 🦀",
        tasks: [],
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        stats: { likes: 89, comments: 24 },
    },
];

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto pb-20">
            <ProfileHeader />

            <div className="px-4 md:px-0">
                <ProfileBadges />
                <ExternalAwards />
                <ProductivityHeatmap />

                <div className="flex items-center justify-between mb-6 mt-8">
                    <h3 className="text-xl font-bold">All Posts</h3>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-medium cursor-pointer">Recent</span>
                        <span>•</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Top</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {ALL_POSTS.map(post => (
                        <FeedPost key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
