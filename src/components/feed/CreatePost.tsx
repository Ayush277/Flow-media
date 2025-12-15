"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Image as ImageIcon, Loader2, Send, X } from "lucide-react";
import { useRef, useState } from "react";

export function CreatePost({ onPostCreated }: { onPostCreated?: () => void }) {
    const [content, setContent] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const supabase = createClient();

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async () => {
        if (!content.trim() && !selectedImage) return;

        setIsSubmitting(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) throw new Error("Not authenticated");

            let imageUrl = null;

            // Upload Image if exists
            if (selectedImage) {
                const fileExt = selectedImage.name.split('.').pop();
                const fileName = `${user.id}/${Math.random()}.${fileExt}`;
                const { error: uploadError } = await supabase.storage
                    .from('post-images')
                    .upload(fileName, selectedImage);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('post-images')
                    .getPublicUrl(fileName);

                imageUrl = publicUrl;
            }

            // Insert Post
            const { data: post, error: postError } = await supabase
                .from('posts')
                .insert({
                    user_id: user.id,
                    content,
                    image_url: imageUrl
                })
                .select()
                .single();

            if (postError) throw postError;

            // Reset Form
            setContent("");
            removeImage();
            if (onPostCreated) onPostCreated();

        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mb-8 px-4 md:px-0">
            <GlowCard className="rounded-3xl p-1 backdrop-blur-xl border-white/5">
                <div className="bg-black/40 rounded-[22px] p-4">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shrink-0" />
                        <div className="flex-1">
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Share your flow..."
                                className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-muted-foreground/50 resize-none min-h-[60px]"
                            />

                            <AnimatePresence>
                                {imagePreview && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="relative rounded-xl overflow-hidden mb-4 group"
                                    >
                                        <img src={imagePreview} alt="Preview" className="w-full max-h-[300px] object-cover rounded-xl" />
                                        <button
                                            onClick={removeImage}
                                            className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                                    >
                                        <ImageIcon className="h-5 w-5" />
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageSelect}
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    disabled={(!content.trim() && !selectedImage) || isSubmitting}
                                    className={cn(
                                        "px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all",
                                        (content.trim() || selectedImage) && !isSubmitting
                                            ? "bg-primary text-white hover:opacity-90"
                                            : "bg-white/5 text-muted-foreground cursor-not-allowed"
                                    )}
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
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
                </div>
            </GlowCard>
        </div>
    );
}
