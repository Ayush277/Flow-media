"use client";

import { createClient } from "@/lib/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthPage() {
    const supabase = createClient();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_IN") {
                router.push("/feed");
                router.refresh();
            }
        });

        return () => subscription.unsubscribe();
    }, [router, supabase]);

    if (!isMounted) return null;

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            </div>

            <div className="w-full max-w-md p-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-primary/10"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
                            <Zap className="h-8 w-8 text-white fill-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Flow</h1>
                        <p className="text-muted-foreground text-center">
                            Join the community of builders, creators, and high-performers.
                        </p>
                    </div>

                    <Auth
                        supabaseClient={supabase}
                        appearance={{
                            theme: ThemeSupa,
                            variables: {
                                default: {
                                    colors: {
                                        brand: 'hsl(265 89% 66%)',
                                        brandAccent: 'hsl(265 89% 56%)',
                                        inputBackground: 'rgba(255, 255, 255, 0.05)',
                                        inputText: 'white',
                                        inputPlaceholder: 'rgba(255, 255, 255, 0.4)',
                                        inputBorder: 'rgba(255, 255, 255, 0.1)',
                                        inputBorderHover: 'rgba(255, 255, 255, 0.2)',
                                        inputBorderFocus: 'hsl(265 89% 66%)',
                                    },
                                    radii: {
                                        borderRadiusButton: '12px',
                                        buttonBorderRadius: '12px',
                                        inputBorderRadius: '12px',
                                    },
                                    space: {
                                        inputPadding: '12px',
                                        buttonPadding: '12px',
                                    },
                                    fonts: {
                                        bodyFontFamily: `var(--font-geist-sans)`,
                                        buttonFontFamily: `var(--font-geist-sans)`,
                                        inputFontFamily: `var(--font-geist-sans)`,
                                        labelFontFamily: `var(--font-geist-sans)`,
                                    }
                                },
                            },
                            className: {
                                container: 'w-full',
                                button: 'w-full font-bold transition-all hover:scale-[1.02] active:scale-[0.98]',
                                input: 'bg-white/5 border-white/10 text-white focus:border-primary/50 transition-colors',
                                label: 'text-sm text-muted-foreground mb-1.5 block',
                                loader: 'animate-spin',
                                anchor: 'text-primary hover:text-primary/80 transition-colors',
                            },
                        }}
                        providers={['google', 'github']}
                        theme="dark"
                        redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`}
                        onlyThirdPartyProviders={false}
                        magicLink={true}
                    />
                </motion.div>

                <p className="text-center text-xs text-muted-foreground mt-8">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}
