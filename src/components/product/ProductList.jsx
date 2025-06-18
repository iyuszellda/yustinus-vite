import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";
import Select from "react-select";

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

    return (
        <div className="flex min-h-screen">
            <div className="hidden md:block lg:block w-64 p-3 fixed h-full overflow-y-auto">
                <div className="p-4 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Category</h3>
                        <Select
                            options={optionCategory}
                            value={selectedCategory}
                            onChange={handleSelectCategory}
                            placeholder="Choose category"
                            formatOptionLabel={({ label, image }) => (
                                <div className="flex items-center gap-2">
                                    <img
                                        src={image}
                                        alt={label}
                                        className="w-6 h-6 rounded-full"
                                        onError={(e) => {
                                            e.target.src = fallbackSrc;
                                        }}
                                    />
                                    <span>{label}</span>
                                </div>
                            )}
                            className="react-select-container bg-white dark:bg-neutral-700"
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                            Price Range
                        </label>
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                min={0}
                                placeholder="Min"
                                value={price && price[0]}
                                onChange={(e) =>
                                    setPrice([e.target.value, price[1]])
                                }
                                className="w-1/2 px-2 py-1 border rounded text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Max"
                                value={price && price[1]}
                                onChange={(e) =>
                                    setPrice([price[0], e.target.value])
                                }
                                className="w-1/2 px-2 py-1 border rounded text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button
                            className="w-1/2 px-2 py-1 text-sm bg-amber-500 dark:bg-amber-300 text-white dark:text-neutral-800 rounded hover:bg-amber-400"
                            onClick={handleClear}
                            disabled={isResetting}
                        >
                            {isResetting ? "Resetting..." : "Clear"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] mx-auto md:ml-64 lg:ml-64">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
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

                    {(isResetting || (hasMore && products.length === 0)) &&
                        Array.from({ length: PRODUCTS_PER_PAGE }).map(
                            (_, i) => <Skeleton key={i} type="card" />,
                        )}
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
