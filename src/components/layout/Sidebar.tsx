"use client";

import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    Bell, CheckSquare,
    Home,
    MoreHorizontal, Plus,
    User,
    Zap
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
    { icon: Home, label: "Home", href: "/feed" },
    { icon: CheckSquare, label: "Tasks", href: "/tasks" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: User, label: "Profile", href: "/profile" },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <aside className="hidden md:flex flex-col w-[275px] h-screen sticky top-0 px-4 py-6 border-r border-white/5 bg-black/20 backdrop-blur-xl">
            {/* Logo Area */}
            <div className="flex items-center gap-3 mb-10 px-4 group cursor-pointer">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
                        <Zap className="h-6 w-6 text-white fill-white" />
                    </div>
                </div>
                <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Flow</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 w-full overflow-hidden"
                        >
                            {/* Active/Hover Background */}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-2xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            {/* Icon & Label */}
                            <item.icon className={cn(
                                "relative z-10 h-6 w-6 transition-colors duration-300",
                                isActive ? "text-primary fill-primary/20" : "text-muted-foreground group-hover:text-white"
                            )} />
                            <span className={cn(
                                "relative z-10 text-lg font-medium transition-colors duration-300",
                                isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}

                <button className="w-full mt-8 group relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Plus className="h-6 w-6 relative z-10" />
                    <span className="text-lg relative z-10">Post Flow</span>
                </button>
            </nav>

            {/* User Profile */}
            <div className="mt-auto pt-6">
                <button
                    onClick={handleSignOut}
                    className="group flex items-center gap-3 w-full p-3 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold ring-2 ring-transparent group-hover:ring-primary/50 transition-all">
                        A
                    </div>
                    <div className="text-left flex-1 min-w-0">
                        <p className="font-bold text-sm text-white truncate group-hover:text-primary transition-colors">Ayush Kumar</p>
                        <p className="text-xs text-muted-foreground truncate">@ayush_builds</p>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                </button>
            </div>
        </aside>
    );
}
