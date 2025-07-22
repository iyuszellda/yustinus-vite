export default function SkeletonFooter() {
    return (
        <div className="w-full px-6 py-8 bg-white dark:bg-neutral-900 animate-pulse">
            <div className="h-4 w-32 mb-3 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="h-4 w-48 mb-2 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="h-4 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </div>
    );
}
