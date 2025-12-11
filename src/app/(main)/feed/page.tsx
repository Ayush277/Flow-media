import { CreatePost } from "@/components/feed/CreatePost";
import { FeedPost } from "@/components/feed/FeedPost";

const DUMMY_POSTS = [
    {
        id: "1",
        user: {
            name: "Ayush Kumar",
            handle: "ayush_builds",
            avatar: "A",
        },
        timestamp: "2h ago",
        content: "Deep work session starting now. Building the new dashboard for Flow. 🚀",
        tasks: [
            { id: "t1", text: "Design Sidebar Component", completed: true },
            { id: "t2", text: "Implement Feed Layout", completed: true },
            { id: "t3", text: "Connect Supabase Auth", completed: false },
        ],
        stats: {
            likes: 24,
            comments: 5,
        },
    },
    {
        id: "2",
        user: {
            name: "Sarah Chen",
            handle: "sarah_codes",
            avatar: "S",
        },
        timestamp: "4h ago",
        content: "Finally cracked that bug! 🐛🔨 Time for a coffee break then back to the grind.",
        tasks: [
            { id: "t1", text: "Debug API Race Condition", completed: true },
            { id: "t2", text: "Write Unit Tests", completed: false },
        ],
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        stats: {
            likes: 42,
            comments: 12,
        },
    },
];

export default function FeedPage() {
    return (
        <div className="w-full">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-white/10 p-4">
                <h1 className="text-xl font-bold">Home</h1>
            </div>
            <CreatePost />

            <div>
                {DUMMY_POSTS.map((post) => (
                    <FeedPost key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}
