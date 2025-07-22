export default function SkeletonNavbar() {
    return (
        <div className="w-full px-6 py-4 bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-between animate-pulse">
            <div className="h-6 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="flex gap-4">
                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
        </div>
    );
}
