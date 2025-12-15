"use client";

import { createClient } from "@/lib/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Comment {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    profiles: {
        username: string;
        full_name: string;
        avatar_url: string;
    };
}

interface CommentDrawerProps {
    postId: string;
    isOpen: boolean;
    onClose: () => void;
    onCommentAdded?: () => void;
}

export function CommentDrawer({ postId, isOpen, onClose, onCommentAdded }: CommentDrawerProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const supabase = createClient();

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase
                .from('comments')
                .select(`
                    id,
                    content,
                    created_at,
                    user_id,
                    profiles (username, full_name, avatar_url)
                `)
                .eq('post_id', postId)
                .order('created_at', { ascending: true });

            if (error) throw error;
            // @ts-ignore
            setComments(data || []);
        } catch (error) {
            console.error("Error fetching comments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            fetchComments();

            // Realtime subscription for new comments on this post
            const channel = supabase
                .channel(`comments-${postId}`)
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments', filter: `post_id=eq.${postId}` }, (payload) => {
                    // Fetch again to get profile data relations
                    fetchComments();
                })
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        }
    }, [isOpen, postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        setSubmitting(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) throw new Error("Not authenticated");

            const { error } = await supabase
                .from('comments')
                .insert({
                    post_id: postId,
                    user_id: user.id,
                    content: newComment.trim()
                });

            if (error) throw error;

            setNewComment("");
            if (onCommentAdded) onCommentAdded();

            // We rely on realtime or fetch fetchComments() called by realtime listener 
            // But to be instant for the user:
            await fetchComments();

        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-neutral-900 border-l border-white/10 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-neutral-900/50 backdrop-blur-md">
                            <h3 className="font-bold text-lg">Comments</h3>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Comments List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                            {loading ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                </div>
                            ) : comments.length > 0 ? (
                                comments.map((comment) => (
                                    <div key={comment.id} className="flex gap-3 group">
                                        <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                                            {comment.profiles?.avatar_url ? (
                                                <img src={comment.profiles.avatar_url} alt={comment.profiles.username} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white">
                                                    {comment.profiles?.full_name?.[0] || "?"}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm font-bold text-white">{comment.profiles?.full_name}</span>
                                                <span className="text-xs text-muted-foreground">{new Date(comment.created_at).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-sm text-gray-300 leading-relaxed">{comment.content}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-muted-foreground">
                                    <p>No comments yet.</p>
                                    <p className="text-sm">Be the first to start the conversation.</p>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-neutral-900 border-t border-white/5">
                            <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Write a comment..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-primary/50 text-sm transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!newComment.trim() || submitting}
                                    className="absolute right-2 p-1.5 bg-primary text-white rounded-full disabled:opacity-50 disabled:bg-transparent disabled:text-muted-foreground hover:bg-primary/90 transition-all"
                                >
                                    {submitting ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Send className="h-4 w-4 ml-0.5" />
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
