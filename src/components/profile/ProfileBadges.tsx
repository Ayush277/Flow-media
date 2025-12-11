"use client";

import { Flame, Target, Trophy, Zap } from "lucide-react";

const badges = [
    {
        icon: Flame,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        title: "On Fire",
        desc: "7 Day Streak",
    },
    {
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        title: "Early Bird",
        desc: "5 tasks before 9AM",
    },
    {
        icon: Target,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        title: "Laser Focus",
        desc: "4h Deep Work Session",
    },
    {
        icon: Trophy,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        title: "Task Master",
        desc: "100 Tasks Completed",
    },
];

export function ProfileBadges() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {badges.map((badge, i) => (
                <div key={i} className="bg-card/30 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-card/50 transition-colors">
                    <div className={`p-3 rounded-full ${badge.bg} ${badge.color}`}>
                        <badge.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">{badge.title}</h4>
                        <p className="text-xs text-muted-foreground">{badge.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
