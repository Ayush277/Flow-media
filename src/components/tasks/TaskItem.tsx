"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Play, Trash2 } from "lucide-react";

export interface Task {
    id: string;
    title: string;
    category: "work" | "study" | "health" | "other";
    duration: string; // e.g. "30m"
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onFocus: (task: Task) => void;
}

const categoryColors = {
    work: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    study: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    health: "bg-green-500/10 text-green-400 border-green-500/20",
    other: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

export function TaskItem({ task, onToggle, onDelete, onFocus }: TaskItemProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
                "group flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300",
                task.completed
                    ? "bg-card/20 border-white/5 opacity-50"
                    : "bg-card/40 border-white/10 hover:border-primary/30 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5"
            )}
        >
            <button
                onClick={() => onToggle(task.id)}
                className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
            >
                {task.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                ) : (
                    <Circle className="h-6 w-6" />
                )}
            </button>

            <div className="flex-1 min-w-0">
                <p className={cn(
                    "font-medium truncate transition-all text-base",
                    task.completed ? "text-muted-foreground line-through" : "text-white"
                )}>
                    {task.title}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                    <span className={cn("text-[10px] px-2.5 py-0.5 rounded-full border uppercase tracking-wider font-bold", categoryColors[task.category])}>
                        {task.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{task.duration}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {!task.completed && (
                    <button
                        onClick={() => onFocus(task)}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                        title="Start Focus Session"
                    >
                        <Play className="h-4 w-4 fill-current" />
                    </button>
                )}
                <button
                    onClick={() => onDelete(task.id)}
                    className="p-2 text-muted-foreground hover:text-red-400 transition-all"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
}
