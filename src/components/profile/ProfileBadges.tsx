"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Clock, Flame, Lock, Moon, Sun, Zap } from "lucide-react";

interface Milestone {
    id: string;
    label: string;
    description: string;
    icon: any;
    progress: number; // 0-100
    isUnlocked: boolean;
    color: string;
}

const MILESTONES: Milestone[] = [
    {
        id: "m1",
        label: "Early Bird",
        description: "Complete 5 sessions before 8 AM",
        icon: Sun,
        progress: 100,
        isUnlocked: true,
        color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
    },
    {
        id: "m2",
        label: "Deep Diver",
        description: "Reach 100 total focus hours",
        icon: Clock,
        progress: 100,
        isUnlocked: true,
        color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    },
    {
        id: "m3",
        label: "Streak Master",
        description: "Maintain a 30-day flow streak",
        icon: Flame,
        progress: 65,
        isUnlocked: false,
        color: "text-orange-400 bg-orange-400/10 border-orange-400/20"
    },
    {
        id: "m4",
        label: "Night Owl",
        description: "Complete 10 sessions after 10 PM",
        icon: Moon,
        progress: 100,
        isUnlocked: true,
        color: "text-purple-400 bg-purple-400/10 border-purple-400/20"
    },
    {
        id: "m5",
        label: "Flow State",
        description: "Complete a 4-hour continuous session",
        icon: Zap,
        progress: 40,
        isUnlocked: false,
        color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
    },
    {
        id: "m6",
        label: "Legend",
        description: "Reach top 1% of global users",
        icon: Award,
        progress: 10,
        isUnlocked: false,
        color: "text-pink-400 bg-pink-400/10 border-pink-400/20"
    }
];

export function ProfileBadges() {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Milestones
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {MILESTONES.map((milestone, i) => (
                    <motion.div
                        key={milestone.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden group",
                            milestone.isUnlocked
                                ? `${milestone.color} hover:shadow-lg hover:scale-[1.02]`
                                : "bg-card/30 border-white/5 opacity-60 grayscale hover:opacity-80"
                        )}
                    >
                        {/* Progress Bar Background for Locked Items */}
                        {!milestone.isUnlocked && (
                            <div
                                className="absolute bottom-0 left-0 h-1 bg-primary/50 transition-all duration-1000"
                                style={{ width: `${milestone.progress}%` }}
                            />
                        )}

                        <div className="flex items-start justify-between mb-2">
                            <div className={cn(
                                "p-2 rounded-xl",
                                milestone.isUnlocked ? "bg-black/20" : "bg-white/5"
                            )}>
                                <milestone.icon className="h-6 w-6" />
                            </div>
                            {!milestone.isUnlocked && (
                                <Lock className="h-4 w-4 text-muted-foreground" />
                            )}
                        </div>

                        <h4 className="font-bold text-sm mb-1">{milestone.label}</h4>
                        <p className="text-xs opacity-80 leading-relaxed">{milestone.description}</p>

                        {milestone.isUnlocked && (
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-[10px] font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full">
                                    Unlocked
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
