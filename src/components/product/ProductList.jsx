import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";

const PRODUCTS_PER_PAGE = 8;

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isResetting, setIsResetting] = useState(false);
    const [optionCategory, setOptionCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(["", ""]);
    const fallbackSrc = "https://placehold.co/400x400?text=Image+Not+Found";
    const observerRef = useRef();

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

                const params = {
                    categoryId: category,
                    price_min: price[0],
                    price_max: price[1],
                };
                const response = await ProductApi.get(`/products/`, {
                    params,
                });

                if (category === "") {
                    const start = reset ? 0 : (page - 1) * PRODUCTS_PER_PAGE;
                    const end = start + PRODUCTS_PER_PAGE;
                    const ListProducts = response.data.slice(start, end);

                    setProducts((prev) => {
                        if (reset) return ListProducts;
                        const productIds = new Set(prev.map((p) => p.id));
                        const uniqueIds = ListProducts.filter(
                            (p) => !productIds.has(p.id),
                        );
                        return [...prev, ...uniqueIds];
                    });

                    setHasMore(end < response.data.length);
                } else {
                    setProducts(response.data);
                    setHasMore(false);
                    setPage(1);
                }
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
                const response = await ProductApi.get("/categories");
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
            <ProductFilter
                optionCategory={optionCategory}
                selectedCategory={selectedCategory}
                price={price}
                handleSelectCategory={handleSelectCategory}
                setPrice={setPrice}
                handleClear={handleClear}
                isResetting={isResetting}
                fallbackSrc={fallbackSrc}
                isMobile={true}
                handleMinPrice={handleMinPrice}
                handleMaxPrice={handleMaxPrice}
            />
            <ProductFilter
                optionCategory={optionCategory}
                selectedCategory={selectedCategory}
                price={price}
                handleSelectCategory={handleSelectCategory}
                setPrice={setPrice}
                handleClear={handleClear}
                isResetting={isResetting}
                fallbackSrc={fallbackSrc}
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

                    {(isResetting || hasMore) &&
                        Array.from({ length: 10 }).map((_, i) => (
                            <Skeleton key={i} type="card" />
                        ))}
                </div>

                {!hasMore && products.length > 0 && (
                    <div className="text-center text-xs mt-6 text-neutral-700 dark:text-neutral-400">
                        You have reached the end of the product list.
                    </div>
                )}
            </div>
        </div>
    );
}
