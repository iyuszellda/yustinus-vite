import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";

const PRODUCTS_PER_PAGE = 8;

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    // const [loading, setLoading] = useState(false);
    const observerRef = useRef();

    const lastProductRef = useCallback(
        (node) => {
            if (!hasMore) return;
            if (observerRef.current) observerRef.current.disconnect();
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observerRef.current.observe(node);
        },
        [hasMore],
    );

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await ProductApi.get("/products");
                const start = (page - 1) * PRODUCTS_PER_PAGE;
                const end = start + PRODUCTS_PER_PAGE;
                const ListProducts = response.data.slice(start, end);

                setProducts((prev) => {
                    const productIds = new Set(prev.map((p) => p.id));
                    const uniqueIds = ListProducts.filter(
                        (p) => !productIds.has(p.id),
                    );
                    return [...prev, ...uniqueIds];
                });
                if (end >= response.data.length) setHasMore(false);
            } catch (error) {
                if (ProductApi.isAxiosError(error)) {
                    if (error.code === "ECONNABORTED") {
                        console.error(
                            "⏰ Request timed out. Please try again.",
                        );
                    } else {
                        console.error("❌ Axios error:", error.message);
                    }
                } else {
                    console.error("⚠️ Unexpected error:", error);
                }
            }
        };

        loadProducts();
    }, [page]);

    return (
        <div className="w-[100%] mx-auto">
            <h2 className="hidden md:block lg:block text-2xl font-bold text-center mb-6 text-neutral-800 dark:text-white">
                Product List
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                {products.map((product, index) => {
                    if (index === products.length - 1) {
                        return (
                            <div
                                ref={lastProductRef}
                                key={`product-${product.id}`}
                            >
                                <ProductCard product={product} />
                            </div>
                        );
                    } else {
                        return (
                            <ProductCard
                                key={`product-${product.id}`}
                                product={product}
                            />
                        );
                    }
                })}

                {hasMore &&
                    Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
                        <Skeleton key={i} type={"card"} />
                    ))}
            </div>

            {!hasMore && (
                <div className="text-center text-xs mt-6 text-neutral-700 dark:text-neutral-400">
                    You have reached the end of the product list.
                </div>
            )}
        </div>
    );
}
