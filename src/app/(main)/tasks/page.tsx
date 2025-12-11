import { TaskGenerator } from "@/components/tasks/TaskGenerator";

export default function TasksPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Design Your Day</h1>
                <p className="text-muted-foreground">Let AI structure your chaos into a perfect flow.</p>
            </div>

            <TaskGenerator />
        </div>
    );
}
