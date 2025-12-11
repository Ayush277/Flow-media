import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex justify-center relative selection:bg-primary/20">
            {/* Futuristic Background Effects */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[150px]" />
                <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="flex w-full max-w-[1280px]">
                <Sidebar />
                <main className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0 border-r border-white/5 max-w-[600px]">
                    <div className="flex-1 w-full">
                        {children}
                    </div>
                </main>
                <div className="hidden lg:block flex-1 p-6 sticky top-0 h-screen">
                    {/* Right Sidebar Placeholder - Search, Trends, etc */}
                    <div className="bg-card/10 backdrop-blur-md rounded-3xl p-6 border border-white/5 h-[calc(100vh-3rem)] overflow-y-auto no-scrollbar hover:border-white/10 transition-colors">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Trending Flows</h3>
                        </div>

                        {/* Placeholder content */}
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Technology · Trending</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">...</span>
                                </div>
                                <p className="font-bold text-base group-hover:text-primary transition-colors">#NextJS14</p>
                                <p className="text-sm text-muted-foreground">12.5K Posts</p>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Productivity · Trending</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">...</span>
                                </div>
                                <p className="font-bold text-base group-hover:text-primary transition-colors">Deep Work</p>
                                <p className="text-sm text-muted-foreground">8.2K Posts</p>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>AI · Trending</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">...</span>
                                </div>
                                <p className="font-bold text-base group-hover:text-primary transition-colors">Gemini 2.0</p>
                                <p className="text-sm text-muted-foreground">50.1K Posts</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-center z-10">
                                    <p className="font-bold text-lg">Flow Pro</p>
                                    <p className="text-xs text-muted-foreground">Unlock AI Analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav />
        </div>
    );
}
