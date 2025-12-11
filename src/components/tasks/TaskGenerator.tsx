"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { Task, TaskItem } from "./TaskItem";

export function TaskGenerator() {
    const [input, setInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedTasks, setGeneratedTasks] = useState<Task[]>([]);

    const handleGenerate = async () => {
        if (!input.trim()) return;

        setIsGenerating(true);

        // Simulate AI delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock AI Response based on input keywords
        const newTasks: Task[] = [
            {
                id: Math.random().toString(),
                title: "Deep Work Session: " + (input.split(' ')[0] || "Task"),
                category: "work",
                duration: "45m",
                completed: false,
            },
            {
                id: Math.random().toString(),
                title: "Review & Refine",
                category: "study",
                duration: "15m",
                completed: false,
            },
            {
                id: Math.random().toString(),
                title: "Quick Break",
                category: "health",
                duration: "10m",
                completed: false,
            }
        ];

        setGeneratedTasks(newTasks);
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

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* AI Input Section */}
            <div className="bg-gradient-to-br from-primary/10 via-card/50 to-card/30 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 mb-8 shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                    <Sparkles className="h-5 w-5" />
                    <h2>AI Task Architect</h2>
                </div>

                <div className="relative">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g. I need to study for my physics exam, finish the react project, and go to the gym."
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 pr-12 text-lg placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none h-32"
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={!input.trim() || isGenerating}
                        className="absolute bottom-4 right-4 p-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                    >
                        {isGenerating ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <ArrowRight className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 ml-1">
                    Tip: Be specific about your goals. The AI will break them down into actionable steps.
                </p>
            </div>

            {/* Generated Tasks List */}
            <AnimatePresence mode="popLayout">
                {generatedTasks.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-lg font-semibold">Your Flow Plan</h3>
                            <span className="text-sm text-muted-foreground">{generatedTasks.filter(t => t.completed).length}/{generatedTasks.length} Completed</span>
                        </div>

                        <div className="space-y-2">
                            {generatedTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onToggle={toggleTask}
                                    onDelete={deleteTask}
                                />
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full py-4 mt-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-primary font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 className="h-5 w-5" />
                            Commit to this Flow
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
