import { useEffect, useState } from "react";

export default function ImageWithSkeleton({
    src,
    alt,
    className = "w-full h-full",
    skeletonClass = "bg-gray-300 animate-pulse",
    errorFallback = "https://placehold.co/400x400?text=Image+Not+Found",
    imageOnload = "https://placehold.co/400x400/transparent/transparent.webP?text=loading",
    onError,
    onClick = null,
}) {
    const [isReady, setIsReady] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [imageElement, setImageElement] = useState(null);

    useEffect(() => {
        const img = new Image();

        img.src = src;
        img.alt = alt;
        img.onload = () => {
            setImageElement(
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full bg-neutral-500 object-cover transition-opacity duration-500 opacity-0"
                    onLoad={(e) => {
                        // Trigger fade-in with slight delay
                        requestAnimationFrame(() => {
                            e.target.classList.remove("opacity-0");
                            e.target.classList.add("opacity-100");
                        });
                    }}
                    onError={(e) => {
                        e.target.src = errorFallback;
                    }}
                    onClick={onClick}
                />,
            );
            setIsReady(true);
        };

        img.onerror = () => {
            setHasError(true);
        };
    }, [src, alt, onError, onClick, errorFallback]);

    return (
        <div className={`relative ${className} overflow-hidden rounded`}>
            {/* Skeleton shown while loading */}
            {!isReady && !hasError && (
                <img
                    src={imageOnload}
                    alt={`alt image loading`}
                    className={`absolute inset-0 ${skeletonClass}`}
                />
            )}

            {/* Error fallback */}
            {hasError && errorFallback && (
                <img
                    src={errorFallback}
                    alt={`alt fallback`}
                    className={`absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm`}
                />
            )}

            {/* Fully loaded image inserted only AFTER it's 100% ready */}
            {isReady && !hasError && imageElement}
        </div>
    );
}
