"use client";

import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import {
    Bell, CheckSquare,
    Home,
    MoreHorizontal, Plus,
    User
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
        <aside className="hidden md:flex flex-col w-[275px] h-screen sticky top-0 border-r border-white/10 bg-background px-4 py-4">
            <div className="flex items-center gap-3 mb-8 px-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-white">F</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Flow</span>
            </div>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200 group w-fit xl:w-full",
                                isActive
                                    ? "font-bold text-white bg-white/5"
                                    : "text-muted-foreground hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("h-6 w-6", isActive ? "fill-current text-primary" : "")} />
                            <span className="text-lg hidden xl:block">{item.label}</span>
                        </Link>
                    );
                })}

                <button className="w-14 xl:w-full mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white py-3.5 rounded-full font-bold shadow-lg shadow-primary/25 transition-all active:scale-95">
                    <Plus className="h-6 w-6 xl:hidden" />
                    <span className="hidden xl:block text-lg">Post Flow</span>
                </button>
            </nav>

            <div className="mt-auto pt-6 space-y-2">
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-4 py-3 rounded-full text-muted-foreground hover:bg-white/10 hover:text-white transition-colors w-fit xl:w-full"
                >
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                        A
                    </div>
                    <div className="hidden xl:block text-left">
                        <p className="font-bold text-sm text-white">Ayush Kumar</p>
                        <p className="text-xs text-muted-foreground">@ayush_builds</p>
                    </div>
                    <MoreHorizontal className="h-4 w-4 ml-auto hidden xl:block" />
                </button>
            </div>
        </aside>
    );
}
