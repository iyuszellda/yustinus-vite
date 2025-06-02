import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductApi from "../../lib/api/productApi";
import SkeletonCard from "../skeleton/SkeletonCard";

const PRODUCTS_PER_PAGE = 8;

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef();

    const lastProductRef = useCallback(
        (node) => {
            if (loading || !hasMore) return;
            if (observerRef.current) observerRef.current.disconnect();
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observerRef.current.observe(node);
        },
        [loading, hasMore],
    );

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
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
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        loadProducts();
    }, [page]);

    return (
        <div className="w-[100%] max-w-7xl mx-auto p-4">
            <h2 className="text-xl text-neutral-950 dark:text-neutral-50 font-semibold mb-2">
                Product List
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

                {loading &&
                    Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
                        <SkeletonCard key={`skeleton-${page}-${i}`} />
                    ))}
            </div>

            {!hasMore && (
                <div className="text-center mt-6 text-gray-500 dark:text-gray-400">
                    You have reached the end of the product list.
                </div>
            )}
        </div>
    );
}
