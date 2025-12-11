import { FeedPost } from "@/components/feed/FeedPost";
import { ProductivityHeatmap } from "@/components/profile/ProductivityHeatmap";
import { ProfileBadges } from "@/components/profile/ProfileBadges";
import { ProfileHeader } from "@/components/profile/ProfileHeader";

const PAST_POSTS = [
    {
        id: "p1",
        user: { name: "Ayush Kumar", handle: "ayush_builds", avatar: "A" },
        timestamp: "Yesterday",
        content: "Crushed the backend integration today! 🚀",
        tasks: [
            { id: "t1", text: "Setup Supabase", completed: true },
            { id: "t2", text: "Design Database Schema", completed: true },
        ],
        stats: { likes: 45, comments: 8 },
    },
];

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto pb-20">
            <ProfileHeader />

            <div className="px-4 md:px-0">
                <ProfileBadges />
                <ProductivityHeatmap />

                <h3 className="text-xl font-bold mb-4 mt-8">Recent Flow</h3>
                <div className="space-y-4">
                    {PAST_POSTS.map(post => (
                        <FeedPost key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
