"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, Code2, Flame, Github, Trophy, Zap } from "lucide-react";
import { useState } from "react";

type DataSource = 'flow' | 'github' | 'leetcode';

interface DayData {
    date: Date;
    intensity: number; // 0-4
    value: number; // Actual value (hours, commits, etc)
}

// Mock Data Generators
const generateData = (type: DataSource): DayData[] => {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 364; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        let intensity = 0;
        let value = 0;

        if (type === 'flow') {
            // Flow: Hours focused (0-12h)
            if (Math.random() > 0.3) {
                value = Math.floor(Math.random() * 8) + 1;
                intensity = Math.min(Math.ceil(value / 2), 4);
            }
        } else if (type === 'github') {
            // GitHub: Commits (0-15)
            if (Math.random() > 0.4) {
                value = Math.floor(Math.random() * 10) + 1;
                intensity = Math.min(Math.ceil(value / 3), 4);
            }
        } else {
            // LeetCode: Problems (0-5)
            if (Math.random() > 0.6) {
                value = Math.floor(Math.random() * 4) + 1;
                intensity = value;
            }
        }

        data.push({ date, intensity, value });
    }
    return data.reverse();
};

const DATA_CONFIG = {
    flow: {
        label: "Flow Focus",
        icon: Zap,
        color: "bg-primary",
        text: "text-primary",
        unit: "h",
        stats: { streak: "12 Days", total: "1,240h", best: "8h" }
    },
    github: {
        label: "GitHub",
        icon: Github,
        color: "bg-green-500",
        text: "text-green-500",
        unit: " commits",
        stats: { streak: "128 Days", total: "2,450", best: "15" }
    },
    leetcode: {
        label: "LeetCode",
        icon: Code2,
        color: "bg-orange-500",
        text: "text-orange-500",
        unit: " problems",
        stats: { streak: "45 Days", total: "450", best: "5" }
    }
};

export function ProductivityHeatmap() {
    const [source, setSource] = useState<DataSource>('flow');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);

    const data = generateData(source);
    const config = DATA_CONFIG[source];

    const getIntensityColor = (intensity: number) => {
        if (intensity === 0) return "bg-white/5";
        // Dynamic opacity based on intensity
        const opacities = [20, 40, 60, 80, 100]; // percentages
        // We need to construct the class name or style. 
        // Tailwind arbitrary values are easiest for dynamic colors if we stick to one palette, 
        // but since we switch colors (green/orange/primary), we'll use style for opacity or specific classes.

        // Using specific classes for cleaner output, assuming standard tailwind colors
        if (source === 'github') {
            return ["bg-white/5", "bg-green-900/40", "bg-green-700/60", "bg-green-500/80", "bg-green-500"][intensity];
        }
        if (source === 'leetcode') {
            return ["bg-white/5", "bg-orange-900/40", "bg-orange-700/60", "bg-orange-500/80", "bg-orange-500"][intensity];
        }
        return ["bg-white/5", "bg-primary/20", "bg-primary/40", "bg-primary/70", "bg-primary"][intensity];
    };

    return (
        <div className="bg-card/30 border border-white/5 rounded-2xl p-6 mb-6">
            {/* Header with Dropdown */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
                    >
                        <config.icon className={cn("h-6 w-6", config.text)} />
                        {config.label}
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-48 bg-card border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden"
                            >
                                {(Object.keys(DATA_CONFIG) as DataSource[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setSource(key);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                                    >
                                        {DATA_CONFIG[key].label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} className={cn("w-3 h-3 rounded-sm", getIntensityColor(i))} />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="w-full overflow-x-auto pb-4 no-scrollbar">
                <div className="min-w-[800px] flex gap-1 flex-wrap h-[140px] content-start">
                    {data.map((day, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.0005 }}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={cn(
                                "w-3 h-3 rounded-sm transition-all hover:ring-1 hover:ring-white/50 cursor-pointer relative",
                                getIntensityColor(day.intensity)
                            )}
                        >
                            {/* Tooltip */}
                            {hoveredDay === day && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded-md border border-white/10 pointer-events-none">
                                    <p className="font-bold">{day.value}{config.unit}</p>
                                    <p className="text-white/50">{day.date.toDateString()}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dynamic Stats */}
            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Flame className={cn("h-4 w-4", config.text)} />
                        <span className="text-xs font-medium uppercase tracking-wider">Current Streak</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{config.stats.streak}</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Clock className={cn("h-4 w-4", config.text)} />
                        <span className="text-xs font-medium uppercase tracking-wider">Total {source === 'flow' ? 'Time' : 'Count'}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{config.stats.total}</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Trophy className={cn("h-4 w-4", config.text)} />
                        <span className="text-xs font-medium uppercase tracking-wider">Best Day</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{config.stats.best}{config.unit}</p>
                </div>
            </div>
        </div>
    );
}
