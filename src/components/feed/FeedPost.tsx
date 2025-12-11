"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { useState } from "react";

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface PostProps {
    user: {
        name: string;
        handle: string;
        avatar: string; // URL or placeholder color
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

export function FeedPost({ user, timestamp, content, tasks, image, stats }: PostProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(stats.likes);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
            className="mb-4 px-4 md:px-0"
        >
            <GlowCard className="rounded-3xl backdrop-blur-xl border-white/5 hover:border-primary/20 transition-colors">
                <div className="flex gap-4 p-5">
                    {/* Avatar Column */}
                    <div className="shrink-0">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 ring-2 ring-black/50">
                            {user.name[0]}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-white text-lg leading-none mb-1">{user.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>@{user.handle}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span>{timestamp}</span>
                                </div>
                            </div>
                            <button className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-white/5 transition-colors">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Text Content */}
                        <p className="text-gray-100 mb-4 whitespace-pre-wrap text-[16px] leading-relaxed font-light tracking-wide">{content}</p>

                        {/* Tasks Module - Glassmorphic */}
                        {tasks.length > 0 && (
                            <div className="bg-black/40 rounded-2xl border border-white/5 overflow-hidden mb-4 backdrop-blur-md">
                                {tasks.map((task, i) => (
                                    <div
                                        key={task.id}
                                        className={cn(
                                            "flex items-center gap-3 p-3.5 transition-all duration-300",
                                            i !== tasks.length - 1 && "border-b border-white/5",
                                            task.completed ? "bg-primary/5 opacity-60" : "hover:bg-white/5"
                                        )}
                                    >
                                        {task.completed ? (
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        ) : (
                                            <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                                        )}
                                        <span className={cn("text-sm font-medium", task.completed ? "text-muted-foreground line-through decoration-primary/50" : "text-gray-200")}>
                                            {task.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Image Proof - Parallax feel */}
                        {image && (
                            <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-2xl shadow-black/50 group/image cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity z-10" />
                                <img
                                    src={image}
                                    alt="Work Proof"
                                    className="w-full h-auto max-h-[500px] object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        )}

                        {/* Action Bar - Floating */}
                        <div className="flex items-center justify-between max-w-md mt-2">
                            <button className="group flex items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors bg-white/0 hover:bg-blue-500/10 px-3 py-1.5 rounded-full">
                                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">{stats.comments}</span>
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLike();
                                }}
                                className={cn(
                                    "group flex items-center gap-2 transition-colors bg-white/0 hover:bg-pink-500/10 px-3 py-1.5 rounded-full",
                                    isLiked ? "text-pink-500" : "text-muted-foreground hover:text-pink-500"
                                )}
                            >
                                <motion.div whileTap={{ scale: 0.8 }}>
                                    <Heart className={cn("h-5 w-5 group-hover:scale-110 transition-transform", isLiked && "fill-current")} />
                                </motion.div>
                                <span className="text-sm font-medium">{likeCount}</span>
                            </button>

                            <button className="group flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors bg-white/0 hover:bg-green-500/10 px-3 py-1.5 rounded-full">
                                <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </GlowCard>
        </motion.div>
    );
}
