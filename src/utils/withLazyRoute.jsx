import { Suspense } from "react";
import Skeleton from "@/components/skeleton/Skeleton";

export function withLazyRoute(Component, type, keyName = null) {
    return (
        <Suspense fallback={<Skeleton type={type} />} key={keyName}>
            <Component />
        </Suspense>
    );
}
