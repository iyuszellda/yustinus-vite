import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";
import useIsAtBottom from "@/hooks/useIsAtBottom";

const PRODUCTS_PER_PAGE = 8;

export default function ProductList() {
    const observerRef = useRef();
    const [page, setPage] = useState(1);
    const isAtBottom = useIsAtBottom(100);
    const [price, setPrice] = useState(["", ""]);
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [category, setCategory] = useState("");
    const [isResetting, setIsResetting] = useState(false);
    const [optionCategory, setOptionCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const lastProductRef = useCallback(
        (node) => {
            if (!hasMore || isResetting) return;
            if (observerRef.current) observerRef.current.disconnect();
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observerRef.current.observe(node);
        },
        [hasMore, isResetting],
    );

    const loadProducts = useCallback(
        async (reset = false) => {
            try {
                if (reset) {
                    setIsResetting(true);
                    setProducts([]);
                }

                const offset = reset ? 0 : (page - 1) * PRODUCTS_PER_PAGE;
                const limit = PRODUCTS_PER_PAGE;

                const params = {
                    categoryId: category,
                    price_min: price[0],
                    price_max: price[1],
                    offset: offset,
                    limit: limit,
                };

                const response = await ProductApi.get(`/api/v1/products/`, {
                    params,
                });

                const newProducts = response.data;

                setProducts((prev) => {
                    if (reset) return newProducts;
                    const productIds = new Set(prev.map((p) => p.id));
                    const uniqueProducts = newProducts.filter(
                        (p) => !productIds.has(p.id),
                    );
                    return [...prev, ...uniqueProducts];
                });

                // If we get fewer products than requested, we've reached the end
                setHasMore(newProducts.length === PRODUCTS_PER_PAGE);

                setIsResetting(false);
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
            } finally {
                if (reset) {
                    setIsResetting(false);
                }
            }
        },
        [page, category, price],
    );

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    useEffect(() => {
        const loadListCategory = async () => {
            try {
                const response = await ProductApi.get("/api/v1/categories");
                setOptionCategory(
                    response.data.map((c) => ({
                        value: c.id,
                        label: c.name,
                        image: c.image,
                    })),
                );
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

        loadListCategory();
    }, []);

    function handleSelectCategory(option) {
        setProducts([]);
        setSelectedCategory(option);
        setCategory(option.value);
        setPage(1);
        setIsResetting(true);
    }

    function handleClear() {
        setCategory(0);
        setPrice(["", ""]);
        setSelectedCategory(null);
        setProducts([]);
        setPage(1);
        setIsResetting(true);
    }

    function handleMinPrice(e) {
        setPrice([e.target.value, price[1]]);
    }

    function handleMaxPrice(e) {
        setProducts([]);
        setPrice([price[0], e.target.value]);
        setIsResetting(true);
    }

    return (
        <div className="flex min-h-screen md:mt-0 mt-14">
            {/* Mobile Filter */}
            <ProductFilter
                optionCategory={optionCategory}
                selectedCategory={selectedCategory}
                price={price}
                handleSelectCategory={handleSelectCategory}
                setPrice={setPrice}
                handleClear={handleClear}
                isResetting={isResetting}
                isMobile={true}
                handleMinPrice={handleMinPrice}
                handleMaxPrice={handleMaxPrice}
            />

            {/* Desktop Filter */}
            <ProductFilter
                optionCategory={optionCategory}
                selectedCategory={selectedCategory}
                price={price}
                handleSelectCategory={handleSelectCategory}
                setPrice={setPrice}
                handleClear={handleClear}
                isResetting={isResetting}
                isMobile={false}
                handleMinPrice={handleMinPrice}
                handleMaxPrice={handleMaxPrice}
            />
            <div className="w-[100%] mx-auto md:ml-64 lg:ml-64">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
                    {products.map((product, index) => {
                        if (index === products.length - 1 && !isResetting) {
                            return (
                                <div
                                    ref={lastProductRef}
                                    key={`product-${product.id}`}
                                >
                                    <ProductCard
                                        product={product}
                                        index={index}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <ProductCard
                                    key={`product-${product.id}`}
                                    product={product}
                                    index={index}
                                />
                            );
                        }
                    })}
                    {(isResetting || hasMore) &&
                        Array.from({ length: 10 }).map((_, i) => (
                            <Skeleton key={i} type="card" />
                        ))}
                </div>
                {!hasMore && isAtBottom && products.length > 0 && (
                    <div className="text-center text-xs mt-6 text-neutral-700 dark:text-neutral-400">
                        You have reached the end of the product list.
                    </div>
                )}
            </div>
        </div>
    );
}
