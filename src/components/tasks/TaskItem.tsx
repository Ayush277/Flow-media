"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Trash2 } from "lucide-react";

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
}

const categoryColors = {
    work: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    study: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    health: "bg-green-500/10 text-green-400 border-green-500/20",
    other: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
                "group flex items-center gap-3 p-3 rounded-xl border transition-all",
                task.completed
                    ? "bg-card/30 border-white/5 opacity-60"
                    : "bg-card/50 border-white/10 hover:border-white/20"
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
                    "font-medium truncate transition-all",
                    task.completed ? "text-muted-foreground line-through" : "text-gray-200"
                )}>
                    {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                    <span className={cn("text-[10px] px-2 py-0.5 rounded-full border uppercase tracking-wider font-semibold", categoryColors[task.category])}>
                        {task.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{task.duration}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={() => onDelete(task.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-red-400 transition-all"
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </motion.div>
    );
}
