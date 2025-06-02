export default function Skeleton({ className = "" }) {
    return (
        <div
            className={`animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded ${className}`}
        />
    );
}
