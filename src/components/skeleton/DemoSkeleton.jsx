export default function DemoSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-700 rounded-2xl m-4 md:m-0 md:mt-0 shadow-lg p-6 flex flex-col justify-between animate-pulse">
            <div>
                <div className="h-12 w-12 mb-4 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                <div className="h-6 bg-neutral-300 dark:bg-neutral-600 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-full mb-1"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-5/6"></div>
            </div>
            <div className="mt-6">
                <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-600 rounded-lg"></div>
            </div>
        </div>
    );
}
