"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Generate dummy data for the last 365 days
const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 364; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        // Random intensity 0-4
        const intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;
        data.push({ date, intensity });
    }
    return data.reverse();
};

const heatmapData = generateHeatmapData();

const intensityColors = {
    0: "bg-white/5",
    1: "bg-primary/20",
    2: "bg-primary/40",
    3: "bg-primary/70",
    4: "bg-primary",
};

export function ProductivityHeatmap() {
    return (
        <div className="bg-card/30 border border-white/5 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Productivity Flow</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-white/5" />
                        <div className="w-3 h-3 rounded-sm bg-primary/20" />
                        <div className="w-3 h-3 rounded-sm bg-primary/40" />
                        <div className="w-3 h-3 rounded-sm bg-primary/70" />
                        <div className="w-3 h-3 rounded-sm bg-primary" />
                    </div>
                    <span>More</span>
                </div>
            </div>

            <div className="w-full overflow-x-auto pb-2">
                <div className="min-w-[800px] flex gap-1 flex-wrap h-[140px] content-start">
                    {heatmapData.map((day, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.001 }}
                            className={cn(
                                "w-3 h-3 rounded-sm transition-colors hover:ring-1 hover:ring-white/50",
                                intensityColors[day.intensity as keyof typeof intensityColors]
                            )}
                            title={`${day.date.toDateString()}: Level ${day.intensity}`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-4 flex gap-8 text-sm">
                <div>
                    <span className="text-muted-foreground">Current Streak</span>
                    <p className="text-xl font-bold text-white">12 Days 🔥</p>
                </div>
                <div>
                    <span className="text-muted-foreground">Longest Streak</span>
                    <p className="text-xl font-bold text-white">45 Days</p>
                </div>
                <div>
                    <span className="text-muted-foreground">Total Focus</span>
                    <p className="text-xl font-bold text-white">1,240h</p>
                </div>
            </div>
        </div>
    );
}
