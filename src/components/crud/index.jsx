import { useEffect, useState, useRef, useCallback } from "react";
import ModalForm from "./ModalForm";
import ProductApi from "@/lib/api/productApi";

const PAGE_LIMIT = 10;

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [header, setHeader] = useState(1);
    const observer = useRef();

    const lastProductRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await ProductApi.get("/products", {
                    params: {
                        offset: page * PAGE_LIMIT,
                        limit: PAGE_LIMIT,
                    },
                });
                const newProducts = response.data;
                setProducts((prev) => [...prev, ...newProducts]);
                setHasMore(newProducts.length === PAGE_LIMIT);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await ProductApi.get("/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [page]);

    const handleAdd = () => {
        setCurrentProduct([]);
        setIsModalOpen(true);
        setHeader(1);
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setIsModalOpen(true);
        setHeader(2);
    };

    const handleSave = async (data) => {
        try {
            if (data.id) {
                await ProductApi.put(`/products/${data.id}`, data);
                setProducts((prev) =>
                    prev.map((product) =>
                        product.id === data.id
                            ? { ...product, ...data }
                            : product,
                    ),
                );
            } else {
                await ProductApi.post(`/products`, data);
                setProducts((prev) => [{ ...data }, ...prev]);
            }

            console.log("Product updated successfully");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const handleDelete = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?"))
            return;

        try {
            await ProductApi.delete(`/products/${productId}`);
            setProducts((prev) =>
                prev.filter((product) => product.id !== productId),
            );
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Failed to delete product.");
        }
    };

    return (
        <div className="w-full mx-auto">
            <div className="overflow-x-auto">
                <h1 className="hidden md:block lg:block text-2xl font-extrabold text-center text-gray-700 dark:text-white mb-12">
                    Product List
                </h1>
                <div className="flex justify-end px-4 py-4">
                    <button
                        className="text-xs cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => handleAdd()}
                    >
                        Add Product
                    </button>
                </div>
                <table className="text-sm min-w-full table-auto">
                    <thead className="text-neutral-900 dark:text-neutral-200 bg-gray-100 dark:bg-neutral-900">
                        <tr>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent">
                        {products.map((product, index) => {
                            const isLast = index === products.length - 1;
                            return (
                                <tr
                                    key={index}
                                    ref={isLast ? lastProductRef : null}
                                    className="border-t text-neutral-900 dark:text-neutral-50 hover:bg-slate-300 dark:hover:bg-slate-800"
                                >
                                    <td className="px-4 py-2">
                                        {product.title}
                                    </td>
                                    <td className="px-4 py-2">
                                        ${product.price}
                                    </td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="md:grid lg:grid grid-cols-2 content-center gap-3">
                                            <button
                                                onClick={() =>
                                                    handleEdit(product)
                                                }
                                                className="cursor-pointer bg-amber-400 text-white px-3 py-1 rounded hover:bg-amber-500"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                                className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {loading && (
                <p className="mt-4 text-gray-500 text-center">Loading...</p>
            )}
            {!hasMore && (
                <p className="mt-4 text-emerald-700 dark:text-emerald-200 text-center text-xs">
                    No more products to load.
                </p>
            )}

            <ModalForm
                header={header}
                product={currentProduct}
                categories={categories}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
}
