"use client";

import { Flame, Zap } from "lucide-react";

export function RightPanel() {
    return (
        <div className="hidden lg:block w-[350px] p-6 sticky top-0 h-screen">
            <div className="h-full overflow-y-auto no-scrollbar space-y-6 pb-10">

                {/* Search Placeholder */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search flows, people, or tags..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all"
                    />
                </div>

                {/* Live Focus Section - NEW */}
                <div className="bg-card/10 backdrop-blur-md rounded-3xl p-5 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Live Focus
                        </h3>
                        <span className="text-xs text-primary cursor-pointer hover:underline">View All</span>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: "Sarah Chen", task: "Debugging Auth API", time: "2h 15m", avatar: "S", color: "bg-purple-500" },
                            { name: "Alex Design", task: "Figma System", time: "45m", avatar: "A", color: "bg-pink-500" },
                            { name: "David Code", task: "Rust Backend", time: "3h 10m", avatar: "D", color: "bg-orange-500" },
                        ].map((user, i) => (
                            <div key={i} className="flex items-center gap-3 group cursor-pointer">
                                <div className={`h-10 w-10 rounded-full ${user.color} flex items-center justify-center text-white font-bold text-sm ring-2 ring-transparent group-hover:ring-white/20 transition-all`}>
                                    {user.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm truncate text-white group-hover:text-primary transition-colors">{user.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">{user.task}</p>
                                </div>
                                <div className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                                    {user.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trending Flows */}
                <div className="bg-card/10 backdrop-blur-md rounded-3xl p-5 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
                            Trending
                        </h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { tag: "#NextJS14", posts: "12.5K", category: "Tech" },
                            { tag: "Deep Work", posts: "8.2K", category: "Productivity" },
                            { tag: "Gemini 2.0", posts: "50.1K", category: "AI" },
                            { tag: "#IndieHacking", posts: "5.3K", category: "Startup" },
                        ].map((trend, i) => (
                            <div key={i} className="group cursor-pointer hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-colors">
                                <div className="flex justify-between text-xs text-muted-foreground mb-0.5">
                                    <span>{trend.category}</span>
                                    <MoreHorizontalIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="font-bold text-sm group-hover:text-primary transition-colors">{trend.tag}</p>
                                <p className="text-xs text-muted-foreground">{trend.posts} Flows</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pro Ad */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-purple-600 p-5 text-white shadow-lg shadow-primary/20 group cursor-pointer">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/20 blur-2xl group-hover:bg-white/30 transition-colors" />
                    <h3 className="font-bold text-lg mb-1 relative z-10">Flow Pro</h3>
                    <p className="text-sm text-white/80 mb-4 relative z-10">Unlock AI analytics and unlimited history.</p>
                    <button className="w-full bg-white text-black font-bold py-2 rounded-xl text-sm hover:bg-white/90 transition-colors relative z-10 flex items-center justify-center gap-2">
                        Upgrade Now <Zap className="h-4 w-4 fill-black" />
                    </button>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground px-2">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Cookie Policy</a>
                    <a href="#" className="hover:underline">Accessibility</a>
                    <a href="#" className="hover:underline">Ads Info</a>
                    <span>© 2025 Flow Media</span>
                </div>
            </div>
        </div>
    );
}

function MoreHorizontalIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    );
}
