"use client";

import { motion } from "framer-motion";
import { Calendar, Link as LinkIcon, MapPin, Settings } from "lucide-react";

export function ProfileHeader() {
    return (
        <div className="relative mb-8">
            {/* Cover Image */}
            <div className="h-48 w-full bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="px-6 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12">
                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="h-32 w-32 rounded-full bg-black border-4 border-black p-1 relative z-10"
                    >
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                            A
                        </div>
                        <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-black" />
                    </motion.div>

                    {/* Info */}
                    <div className="flex-1 mb-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white">Ayush Kumar</h1>
                                <p className="text-muted-foreground">@ayush_builds</p>
                            </div>
                            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <Settings className="h-5 w-5 text-muted-foreground" />
                            </button>
                        </div>

                        <p className="mt-3 text-gray-300 max-w-lg">
                            Building the future of productivity. 🚀 | Level 42 Visionary | Shipping code & hitting PRs.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                                <LinkIcon className="h-4 w-4" />
                                <span>ayush.dev</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Joined December 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
