import { Skeleton } from "@/components/ui/skeleton";

export function FeedPostSkeleton() {
    return (
        <div className="mb-6 px-4 md:px-0">
            <div className="rounded-3xl bg-black/20 border border-white/5 overflow-hidden p-6">
                <div className="flex gap-5">
                    {/* Avatar */}
                    <Skeleton className="h-14 w-14 rounded-2xl bg-white/5" />

                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-3">
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-32 bg-white/5" />
                                <div className="flex gap-2">
                                    <Skeleton className="h-4 w-20 bg-white/5" />
                                    <Skeleton className="h-4 w-4 bg-white/5 rounded-full" />
                                    <Skeleton className="h-4 w-24 bg-white/5" />
                                </div>
                            </div>
                            <Skeleton className="h-8 w-8 rounded-full bg-white/5" />
                        </div>

                        {/* Content */}
                        <div className="space-y-2 mb-5">
                            <Skeleton className="h-4 w-full bg-white/5" />
                            <Skeleton className="h-4 w-full bg-white/5" />
                            <Skeleton className="h-4 w-3/4 bg-white/5" />
                        </div>

                        {/* Image Skeleton */}
                        <Skeleton className="w-full h-64 rounded-2xl bg-white/5 mb-5" />

                        {/* Action Bar */}
                        <div className="flex gap-4">
                            <Skeleton className="h-8 w-16 rounded-full bg-white/5" />
                            <Skeleton className="h-8 w-16 rounded-full bg-white/5" />
                            <Skeleton className="h-8 w-16 rounded-full bg-white/5 ml-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
