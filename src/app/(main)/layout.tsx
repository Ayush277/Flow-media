import { MobileNav } from "@/components/layout/MobileNav";
import { RightPanel } from "@/components/layout/RightPanel";
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
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                {/* Gradient Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s' }} />
            </div>

            <div className="flex w-full max-w-[1440px] gap-4 lg:gap-8 justify-center px-4">
                <Sidebar />
                <main className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0 max-w-[640px]">
                    <div className="flex-1 w-full">
                        {children}
                    </div>
                </main>
                <RightPanel />
            </div>
            <MobileNav />
        </div>
    );
}
