"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Bell, CheckSquare, Home, Plus, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: Home, label: "Feed", href: "/feed" },
    { icon: CheckSquare, label: "Tasks", href: "/tasks" },
    { icon: Plus, label: "New", href: "/new", isPrimary: true },
    { icon: Bell, label: "Alerts", href: "/notifications" },
    { icon: User, label: "Profile", href: "/profile" },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-xl border-t border-white/10 px-6 py-2 z-50 pb-safe">
            <div className="flex items-center justify-between max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    if (item.isPrimary) {
                        return (
                            <button
                                key={item.href}
                                className="group flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-purple-600 text-white shadow-lg shadow-primary/25 active:scale-95 transition-all -mt-8 border-4 border-black relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <item.icon className="h-6 w-6 relative z-10" />
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative flex flex-col items-center gap-1 p-2 transition-colors",
                                isActive ? "text-white" : "text-muted-foreground hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobileNavGlow"
                                    className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                            <item.icon className={cn("h-6 w-6 relative z-10", isActive && "fill-current")} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
