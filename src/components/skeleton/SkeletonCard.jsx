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
        <div className="rounded overflow-hidden bg-white dark:bg-neutral-700 shadow-lg group hover:shadow-xl transition duration-300 ease-in-out animate-pulse">
            <div className="block">
                <div className="relative bg-transparent">
                    <div className="w-full scale-90 aspect-square rounded-md bg-neutral-300 dark:bg-neutral-600 lg:aspect-auto lg:h-70" />
                    <div className="absolute bottom-0 top-0 right-0 left-0 opacity-25 bg-neutral-700" />
                </div>
            </div>
            <div className="px-6 py-3">
                <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-600 rounded mb-2" />
                <div className="h-3 w-full bg-neutral-300 dark:bg-neutral-600 rounded mt-2" />
                <div className="h-3 w-5/6 bg-neutral-300 dark:bg-neutral-600 rounded mt-1" />
            </div>
        </div>
    );
}
