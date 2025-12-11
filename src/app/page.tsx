"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background selection:bg-primary/20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-foreground/80 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          The Future of Productivity is Social
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          Get Addicted to <br />
          <span className="text-primary">Getting Things Done.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Flow combines AI-powered task management with social accountability.
          Post your daily plans, get hyped by friends, and prove your work with AI verification.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/feed"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_-5px_var(--color-primary)]"
          >
            Start Your Flow
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium">
            View Demo
          </button>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl"
        >
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-yellow-400" />}
            title="Gamified Focus"
            description="Earn XP and streaks for completing tasks. Lose points for slacking off."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-blue-400" />}
            title="Social Hype"
            description="Share your daily plan. Friends react to boost your motivation."
          />
          <FeatureCard
            icon={<CheckCircle2 className="h-6 w-6 text-green-400" />}
            title="AI Verification"
            description="Upload proof of work. Our AI verifies it's productive (no faces, just work)."
          />
        </motion.div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm hover:bg-card/50 transition-colors text-left">
      <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
