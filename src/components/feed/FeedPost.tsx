"use client";

import { CommentDrawer } from "@/components/feed/CommentDrawer";
import { useFollow } from "@/hooks/useFollow";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, MessageCircle, MoreHorizontal, Share2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface PostProps {
    id: string; // Post ID
    userId: string; // Author ID
    currentUserId?: string; // To check if liked
    user: {
        name: string;
        handle: string;
        avatar: string;
    };
    timestamp: string;
    content: string;
    tasks: Task[];
    image?: string;
    stats: {
        likes: number;
        comments: number;
    };
}

export function FeedPost({ id, userId, currentUserId, user, timestamp, content, tasks, image, stats }: PostProps) {
    const supabase = createClient();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(stats.likes);
    const [loadingLike, setLoadingLike] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const { isFollowing, toggleFollow, isLoading: isFollowLoading } = useFollow(userId, currentUserId);
    const isOwner = currentUserId === userId;

    // Check if user already liked this post
    useEffect(() => {
        if (!currentUserId) return;

        const checkLike = async () => {
            const { data, error } = await supabase
                .from('likes')
                .select('*')
                .eq('post_id', id)
                .eq('user_id', currentUserId)
                .single();

            if (data) setIsLiked(true);
        };

        checkLike();
    }, [currentUserId, id]);

    const handleLike = async () => {
        if (!currentUserId || loadingLike) return;

        // Optimistic UI
        const previousLiked = isLiked;
        const previousCount = likeCount;

        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
        setLoadingLike(true);

        try {
            if (previousLiked) {
                // Remove like
                const { error } = await supabase
                    .from('likes')
                    .delete()
                    .eq('post_id', id)
                    .eq('user_id', currentUserId);
                if (error) throw error;
            } else {
                // Add like
                const { error } = await supabase
                    .from('likes')
                    .insert({ post_id: id, user_id: currentUserId });
                if (error) throw error;
            }
        } catch (error) {
            console.error("Error toggling like:", error);
            // Revert
            setIsLiked(previousLiked);
            setLikeCount(previousCount);
        } finally {
            setLoadingLike(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
            className="mb-6 px-4 md:px-0"
        >
            <div className="relative group rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)]">
                {/* Glowing Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-6">
                    <div className="flex gap-5">
                        {/* Avatar Column */}
                        <div className="shrink-0">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden group/avatar cursor-pointer">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                                        <span className="relative z-10 text-lg">{user.name[0]}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 min-w-0">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-white text-lg leading-tight mb-0.5 hover:text-primary transition-colors cursor-pointer">{user.name}</h3>
                                        {!isOwner && (
                                            <button
                                                onClick={toggleFollow}
                                                disabled={isFollowLoading}
                                                className={cn(
                                                    "text-xs font-bold px-2 py-0.5 rounded-full transition-all border",
                                                    isFollowing
                                                        ? "border-white/20 text-muted-foreground hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20"
                                                        : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                                                )}
                                            >
                                                {isFollowing ? "Following" : "Follow"}
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="hover:text-white transition-colors cursor-pointer">@{user.handle}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{timestamp}</span>
                                    </div>
                                </div>
                                <button className="text-muted-foreground hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Text Content */}
                            <p className="text-gray-200 mb-5 whitespace-pre-wrap text-[16px] leading-relaxed font-normal tracking-wide">
                                {content}
                            </p>

                            {/* Tasks Module - Modern Card */}
                            {tasks.length > 0 && (
                                <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden mb-5">
                                    <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center gap-2">
                                        <Zap className="h-3.5 w-3.5 text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Flow Session</span>
                                    </div>
                                    {tasks.map((task, i) => (
                                        <div
                                            key={task.id}
                                            className={cn(
                                                "flex items-center gap-3 p-3.5 transition-all duration-300 group/task cursor-default",
                                                i !== tasks.length - 1 && "border-b border-white/5",
                                                task.completed ? "bg-primary/5" : "hover:bg-white/5"
                                            )}
                                        >
                                            {task.completed ? (
                                                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                                </div>
                                            ) : (
                                                <div className="h-5 w-5 rounded-full border-2 border-white/20 group-hover/task:border-white/40 transition-colors shrink-0" />
                                            )}
                                            <span className={cn("text-sm font-medium transition-colors", task.completed ? "text-muted-foreground line-through decoration-primary/50" : "text-gray-200 group-hover/task:text-white")}>
                                                {task.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Image Proof - Cinematic */}
                            {image && (
                                <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-2xl shadow-black/50 group/image cursor-pointer">
                                    <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={image}
                                        alt="Work Proof"
                                        className="w-full h-auto max-h-[500px] object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                            )}

                            {/* Action Bar - Modern Pills */}
                            <div className="flex items-center gap-4 mt-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLike();
                                    }}
                                    className={cn(
                                        "group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border border-transparent",
                                        isLiked
                                            ? "bg-pink-500/10 text-pink-500 border-pink-500/20"
                                            : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white hover:border-white/10"
                                    )}
                                >
                                    <motion.div whileTap={{ scale: 0.8 }}>
                                        <Heart className={cn("h-4 w-4 transition-transform group-hover:scale-110", isLiked && "fill-current")} />
                                    </motion.div>
                                    <span className="text-sm font-bold">{likeCount}</span>
                                </button>

                                <button
                                    onClick={() => setIsCommentsOpen(true)}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-all duration-300 border border-transparent hover:border-white/10"
                                >
                                    <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-bold">{stats.comments}</span>
                                </button>

                                <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-green-400 transition-all duration-300 border border-transparent hover:border-green-500/20 ml-auto">
                                    <Share2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CommentDrawer
                postId={id}
                isOpen={isCommentsOpen}
                onClose={() => setIsCommentsOpen(false)}
                onCommentAdded={() => {
                    // Start of future enhancement: Update local comment count
                }}
            />
        </motion.div>
    );
}
