"use client";

import { createClient } from "@/lib/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layout, List, Loader2, Minimize2, Play, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Task, TaskItem } from "./TaskItem";

export function TaskGenerator() {
    const [input, setInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedTasks, setGeneratedTasks] = useState<Task[]>([]);
    const [viewMode, setViewMode] = useState<'list' | 'board'>('list');
    const [isCommitting, setIsCommitting] = useState(false);
    const supabase = createClient();
    const router = useRouter();

    // Focus Mode State
    const [activeTask, setActiveTask] = useState<Task | null>(null);
    const [focusTime, setFocusTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && activeTask) {
            interval = setInterval(() => {
                setFocusTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, activeTask]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleGenerate = async () => {
        if (!input.trim()) return;

        setIsGenerating(true);
        // Simulate AI generation for now (could be replaced with real AI call)
        await new Promise(resolve => setTimeout(resolve, 1500));

        const newTasks: Task[] = [
            {
                id: Math.random().toString(),
                title: "Deep Work: " + (input.split(' ')[0] || "Task"),
                category: "work",
                duration: "45m",
                completed: false,
            },
            {
                id: Math.random().toString(),
                title: "Review Progress",
                category: "study",
                duration: "15m",
                completed: false,
            },
            {
                id: Math.random().toString(),
                title: "Quick Reset",
                category: "health",
                duration: "10m",
                completed: false,
            }
        ];

        setGeneratedTasks(prev => [...newTasks, ...prev]);
        setIsGenerating(false);
        setInput("");
    };

    const toggleTask = (id: string) => {
        setGeneratedTasks(tasks =>
            tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
        );
    };

    const deleteTask = (id: string) => {
        setGeneratedTasks(tasks => tasks.filter(t => t.id !== id));
    };

    const startFocus = (task: Task) => {
        setActiveTask(task);
        setIsTimerRunning(true);
        setFocusTime(0);
    };

    const endFocus = () => {
        setIsTimerRunning(false);
        setActiveTask(null);
    };

    const handleCommit = async () => {
        if (generatedTasks.length === 0) return;
        setIsCommitting(true);

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert("Please login to commit tasks");
                return;
            }

            // 1. Create a Post
            const { data: post, error: postError } = await supabase
                .from('posts')
                .insert({
                    user_id: user.id,
                    content: `Generated a new flow session: ${generatedTasks.length} tasks planned. 🎯`,
                })
                .select()
                .single();

            if (postError) throw postError;

            // 2. Create Tasks linked to Post
            const tasksToInsert = generatedTasks.map(task => ({
                user_id: user.id,
                post_id: post.id,
                text: task.title,
                is_completed: task.completed,
                duration_seconds: parseInt(task.duration) * 60 || 0 // simplistic parsing
            }));

            const { error: tasksError } = await supabase
                .from('tasks')
                .insert(tasksToInsert);

            if (tasksError) throw tasksError;

            // Success
            setGeneratedTasks([]);
            router.push('/feed');

        } catch (error) {
            console.error("Error committing tasks:", error);
            alert("Failed to commit tasks. Please try again.");
        } finally {
            setIsCommitting(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto relative">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                    >
                        <List className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => setViewMode('board')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'board' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                    >
                        <Layout className="h-4 w-4" />
                    </button>
                </div>
                <div className="text-sm text-muted-foreground">
                    {generatedTasks.filter(t => t.completed).length}/{generatedTasks.length} Completed
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Input */}
                <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary/10 via-card/50 to-card/30 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 shadow-2xl shadow-primary/5 sticky top-24">
                        <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                            <Sparkles className="h-5 w-5" />
                            <h2>AI Architect</h2>
                        </div>

                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="What's your goal today?"
                                className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 pr-12 text-base placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none h-40"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={!input.trim() || isGenerating}
                                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95"
                            >
                                {isGenerating ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <ArrowRight className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Tasks */}
                <div className="lg:col-span-2 space-y-4">
                    <AnimatePresence mode="popLayout">
                        {generatedTasks.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center h-64 text-muted-foreground border-2 border-dashed border-white/10 rounded-3xl"
                            >
                                <Sparkles className="h-8 w-8 mb-2 opacity-50" />
                                <p>No flows yet. Ask AI to generate one.</p>
                            </motion.div>
                        ) : (
                            generatedTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onToggle={toggleTask}
                                    onDelete={deleteTask}
                                    onFocus={startFocus}
                                />
                            ))
                        )}
                    </AnimatePresence>

                    {generatedTasks.length > 0 && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={handleCommit}
                            disabled={isCommitting}
                            className="w-full py-4 mt-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-500/50 text-green-400 font-bold transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                            {isCommitting ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    Commit to Public Feed
                                </>
                            )}
                        </motion.button>
                    )}
                </div>
            </div>

            {/* Focus Mode Overlay */}
            <AnimatePresence>
                {activeTask && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
                    >
                        <button
                            onClick={endFocus}
                            className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Minimize2 className="h-6 w-6" />
                        </button>

                        <div className="text-center space-y-8 max-w-2xl w-full">
                            <motion.div
                                animate={{
                                    boxShadow: isTimerRunning ? ["0 0 0 0px rgba(59, 130, 246, 0)", "0 0 0 20px rgba(59, 130, 246, 0.1)", "0 0 0 0px rgba(59, 130, 246, 0)"] : "none"
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center relative"
                            >
                                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                                    <span className="text-6xl font-mono font-bold tracking-tighter">
                                        {formatTime(focusTime)}
                                    </span>
                                </div>
                            </motion.div>

                            <div>
                                <h2 className="text-3xl font-bold mb-2">{activeTask.title}</h2>
                                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                    <span className="uppercase tracking-widest text-sm font-semibold">{activeTask.category}</span>
                                    <span>•</span>
                                    <span>Target: {activeTask.duration}</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                                    className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2"
                                >
                                    {isTimerRunning ? <span className="flex items-center gap-2"><div className="w-3 h-3 bg-black rounded-sm" /> Pause</span> : <span className="flex items-center gap-2"><Play className="h-4 w-4 fill-black" /> Resume</span>}
                                </button>
                                <button
                                    onClick={() => {
                                        toggleTask(activeTask.id);
                                        endFocus();
                                    }}
                                    className="px-8 py-3 rounded-full bg-white/10 font-bold hover:bg-white/20 transition-colors flex items-center gap-2"
                                >
                                    <CheckCircle2 className="h-5 w-5" />
                                    Complete Task
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
