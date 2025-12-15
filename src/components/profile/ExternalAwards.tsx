"use client";

import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2, Medal, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

// --- Custom Badge Components ---

function ArcticCodeVaultBadge({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="arcticGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#E1F5FE" />
                    <stop offset="100%" stopColor="#81D4FA" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#arcticGrad)" stroke="#4FC3F7" strokeWidth="2" />
            <path d="M30 50 L50 70 L80 30" stroke="#0277BD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 35 L65 35" stroke="#0277BD" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M40 80 L60 80" stroke="#0277BD" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        </svg>
    );
}

function PullSharkBadge({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sharkGrad" x1="50" y1="0" x2="50" y2="100">
                    <stop offset="0%" stopColor="#42A5F5" />
                    <stop offset="100%" stopColor="#1565C0" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
            <path d="M50 20 C50 20 80 50 80 70 C80 85 65 85 50 85 C35 85 20 85 20 70 C20 50 50 20 50 20 Z" fill="url(#sharkGrad)" />
            <circle cx="40" cy="60" r="3" fill="white" />
            <circle cx="60" cy="60" r="3" fill="white" />
            <path d="M45 75 Q50 80 55 75" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function LeetCodeGuardianBadge({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="guardianGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#FFA726" />
                    <stop offset="100%" stopColor="#EF6C00" />
                </linearGradient>
            </defs>
            <path d="M50 10 L90 25 V55 C90 75 50 95 50 95 C50 95 10 75 10 55 V25 L50 10 Z" fill="url(#guardianGrad)" stroke="#E65100" strokeWidth="2" />
            <path d="M35 45 L50 60 L70 35" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="30" r="5" fill="white" opacity="0.8" />
        </svg>
    );
}

function LeetCode100Badge({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fireGrad" x1="50" y1="100" x2="50" y2="0">
                    <stop offset="0%" stopColor="#D84315" />
                    <stop offset="50%" stopColor="#F4511E" />
                    <stop offset="100%" stopColor="#FFAB91" />
                </linearGradient>
            </defs>
            <path d="M50 95 C50 95 20 80 20 55 C20 35 35 20 50 5 C65 20 80 35 80 55 C80 80 50 95 50 95 Z" fill="url(#fireGrad)" />
            <text x="50" y="65" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif">100</text>
        </svg>
    );
}

function WakaTimeBadge({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#263238" stroke="#37474F" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#4DB6AC" strokeWidth="8" strokeDasharray="160 220" transform="rotate(-90 50 50)" />
            <text x="50" y="55" textAnchor="middle" fill="#4DB6AC" fontSize="20" fontWeight="bold" fontFamily="monospace">1%</text>
        </svg>
    );
}

// --- Data & Logic ---

interface ExternalAward {
    id: string;
    platform: 'github' | 'leetcode' | 'wakatime';
    title: string;
    description: string;
    BadgeComponent: any;
    date: string;
    color: string;
}

const BADGE_COMPONENTS = {
    'arctic-code-vault': ArcticCodeVaultBadge,
    'pull-shark': PullSharkBadge,
    'leetcode-guardian': LeetCodeGuardianBadge,
    'leetcode-100': LeetCode100Badge,
    'wakatime-top-1': WakaTimeBadge,
};

const MOCK_AWARDS: ExternalAward[] = [
    {
        id: "gh-1",
        platform: "github",
        title: "Arctic Code Vault",
        description: "Contributed code to the 2020 GitHub Archive Program",
        BadgeComponent: ArcticCodeVaultBadge,
        date: "2020",
        color: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20"
    },
    {
        id: "gh-2",
        platform: "github",
        title: "Pull Shark",
        description: "Opened pull requests that were merged",
        BadgeComponent: PullSharkBadge,
        date: "2023",
        color: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20"
    },
    {
        id: "lc-1",
        platform: "leetcode",
        title: "Guardian",
        description: "Top 5% in Weekly Contest Rating",
        BadgeComponent: LeetCodeGuardianBadge,
        date: "2024",
        color: "bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/20"
    },
    {
        id: "lc-2",
        platform: "leetcode",
        title: "100 Days Badge",
        description: "Solved a problem for 100 consecutive days",
        BadgeComponent: LeetCode100Badge,
        date: "2024",
        color: "bg-red-500/5 hover:bg-red-500/10 border-red-500/20"
    },
    {
        id: "wt-1",
        platform: "wakatime",
        title: "Top 1% Developer",
        description: "Coded for 50+ hours in a single week",
        BadgeComponent: WakaTimeBadge,
        date: "Dec 2024",
        color: "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20"
    }
];

export function ExternalAwards() {
    const [awards, setAwards] = useState<ExternalAward[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                    // Fallback to mock data if not logged in
                    setAwards(MOCK_AWARDS);
                    return;
                }

                // In a real app, we would fetch from a 'user_awards' table
                // const { data, error } = await supabase.from('user_awards').select('*').eq('user_id', user.id);

                // Simulating API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // For now, we'll use the mock data as the "fetched" data
                setAwards(MOCK_AWARDS);
            } catch (error) {
                console.error("Error fetching awards:", error);
                setAwards(MOCK_AWARDS); // Fallback
            } finally {
                setLoading(false);
            }
        };

        fetchAwards();
    }, []);

    if (loading) {
        return (
            <div className="mb-8 flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                External Awards
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award, i) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "border rounded-xl p-4 flex items-center gap-4 transition-all duration-300 group",
                            award.color
                        )}
                    >
                        {/* Large Badge Icon */}
                        <div className="h-16 w-16 shrink-0 drop-shadow-lg transition-transform group-hover:scale-110 duration-300">
                            <award.BadgeComponent className="w-full h-full" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-base truncate pr-2">{award.title}</h4>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                                    {award.platform}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                                {award.description}
                            </p>
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                                <Medal className="h-3 w-3 text-primary" />
                                <span>Earned {award.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
