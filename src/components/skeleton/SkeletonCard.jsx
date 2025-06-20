export default function SkeletonCard({ isDetail, isProduct }) {
    return isDetail ? (
        isProduct ? (
            <div className="w-[90%] max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 animate-pulse">
                <div className="space-y-4">
                    <div className="bg-neutral-300 dark:bg-neutral-700 rounded-lg object-contain w-full max-w-md mx-auto h-96" />
                    <div className="flex gap-2 justify-center">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="w-16 h-16 rounded-md cursor-pointer border-2 border-transparent bg-neutral-300 dark:bg-neutral-700"
                            />
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4" />
                    <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-1/4" />
                    <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3" />
                    <div className="h-20 bg-neutral-300 dark:bg-neutral-700 rounded w-full" />
                    <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded w-40" />
                </div>
            </div>
        ) : (
            <div className="w-full px-4 animate-pulse">
                <div className="space-y-4">
                    <div className="w-full max-h-[520px] h-[300px] bg-neutral-300 dark:bg-neutral-700 rounded-lg" />
                    <div className="flex gap-2 justify-center">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 bg-neutral-300 dark:bg-neutral-700 rounded-md border-2 border-transparent"
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    ) : (
        <div class="bg-white dark:bg-neutral-700 rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div class="relative w-full aspect-square bg-neutral-300 dark:bg-neutral-600">
                <div class="absolute top-2 right-2 w-16 h-5 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
                <div class="absolute bottom-2 left-2 w-12 h-6 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
            </div>
            <div class="px-4 py-3">
                <div class="h-5 w-3/4 bg-neutral-300 dark:bg-neutral-600 rounded mb-2"></div>
                <div class="space-y-1">
                    <div class="h-3 w-full bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                    <div class="h-3 w-5/6 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                    <div class="h-3 w-2/3 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                </div>
            </div>
        </div>
    );
}
