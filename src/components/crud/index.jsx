import { useEffect, useState, useRef, useCallback } from "react";
import ModalForm from "./ModalForm";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";
import CrudFilter from "./CrudFilter";

const PAGE_LIMIT = 5;

export default function ProductTable() {
    const [filterText, setFilterText] = useState("");
    const [products, setProducts] = useState([]);
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(filterText.toLowerCase()),
    );
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [header, setHeader] = useState(1);
    const fallbackSrc = "https://placehold.co/400x400?text=Image+Not+Found";
    const observer = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const handleChange = (e) => setIsMobile(e.matches);
        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

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
                        offset: (page - 1) * PAGE_LIMIT,
                        limit: PAGE_LIMIT,
                    },
                });
                const newProducts = response.data;
                setProducts((prev) =>
                    page === 1 ? newProducts : [...prev, ...newProducts],
                );
                setHasMore(newProducts.length === PAGE_LIMIT);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]); // Only depends on page

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await ProductApi.get("/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

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
                <h1 className="hidden md:block lg:block text-2xl font-extrabold text-center text-neutral-700 dark:text-white mb-12">
                    Product List
                </h1>
                <CrudFilter
                    filterText={filterText}
                    setFilterText={setFilterText}
                    handleAdd={handleAdd}
                    isMobile={isMobile}
                />
                <div
                    className={`overflow-x-auto rounded-md shadow-md ${isMobile ? "mt-30" : ""}`}
                >
                    <table className="text-sm min-w-full bg-white">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="py-3 px-4 text-left border-b">
                                    Title
                                </th>
                                <th className="py-3 px-4 text-left border-b">
                                    Price
                                </th>
                                <th className="py-3 px-4 text-left border-b">
                                    Image
                                </th>
                                <th className="py-3 px-4 text-center border-b">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-transparent">
                            {filteredProducts.map((product, index) => {
                                const isLast = index === products.length - 1;
                                return (
                                    <tr
                                        key={index}
                                        ref={isLast ? lastProductRef : null}
                                        className="text-neutral-900 hover:bg-slate-300 transition"
                                    >
                                        <td className="py-3 px-4 border-b">
                                            {product.title}
                                        </td>
                                        <td className="py-3 px-4 border-b">
                                            ${product.price}
                                        </td>
                                        <td className="py-3 px-4 border-b">
                                            <img
                                                src={product.images[0]}
                                                alt={product.title}
                                                className="w-16 h-16 object-cover rounded"
                                                onError={(e) => {
                                                    e.target.src = fallbackSrc;
                                                }}
                                            />
                                        </td>
                                        <td className="py-3 px-4 border-b">
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
            </div>

            {loading && <Skeleton type="table" />}
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
