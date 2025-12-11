"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatePresence, motion } from "framer-motion";
import { Image as ImageIcon, ListTodo, Loader2, Send, X } from "lucide-react";
import { useRef, useState } from "react";

export function CreatePost() {
    const [content, setContent] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a fake local URL for preview
            const url = URL.createObjectURL(file);
            setSelectedImage(url);
        }
    };

    const handlePost = async () => {
        setIsUploading(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsUploading(false);
        setContent("");
        setSelectedImage(null);
        // In a real app, we would trigger a feed refresh here
    };

    return (
        <div className="mb-8 px-4 md:px-0">
            <GlowCard className="rounded-3xl backdrop-blur-xl border-white/5">
                <div className="flex gap-4 p-5">
                    <div className="shrink-0">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 ring-2 ring-black/50">
                            Y
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="What's your flow for today?"
                            className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-muted-foreground/50 resize-none min-h-[80px] p-0 mb-2 text-white font-light tracking-wide"
                        />

                        <AnimatePresence>
                            {selectedImage && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                    className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-2xl"
                                >
                                    <img src={selectedImage} alt="Preview" className="w-full max-h-[300px] object-cover" />
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex gap-1 -ml-2">
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2.5 rounded-full hover:bg-primary/10 text-primary transition-colors group"
                                    title="Add Image Proof"
                                >
                                    <ImageIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                />
                                <button className="p-2.5 rounded-full hover:bg-primary/10 text-primary transition-colors group" title="Add Task List">
                                    <ListTodo className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>

                            <button
                                onClick={handlePost}
                                disabled={(!content.trim() && !selectedImage) || isUploading}
                                className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                            >
                                {isUploading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Posting
                                    </>
                                ) : (
                                    <>
                                        Post Flow
                                        <Send className="h-3.5 w-3.5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </GlowCard>
        </div>
    );
}
