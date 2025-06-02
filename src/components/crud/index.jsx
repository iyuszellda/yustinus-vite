import { useEffect, useState } from "react";
import ProductApi from "../../lib/api/productApi";
import ModalForm from "./ModalForm";
import ModalDelete from "./ModalDelete";

export default function CrudIndex() {
    const [products, setProducts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        categoryId: 1,
        images: [""],
    });

    const fetchProducts = async () => {
        try {
            const res = await ProductApi.get("/products?limit=150&offset=0");
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCreateOrUpdate = async (productData) => {
        if (editProduct) {
            try {
                // Update existing product
                const { data } = await ProductApi.put(
                    `/products/${editProduct.id}`,
                    productData,
                );
                setProducts((prev) =>
                    prev.map((p) => (p.id === editProduct.id ? data : p)),
                );
                setEditProduct(null);
            } catch (error) {
                console.error("Error updating product:", error);
            }
        } else {
            try {
                const { data } = await ProductApi.post(
                    "/products",
                    productData,
                );
                setProducts((prev) => [data, ...prev]);
            } catch (error) {
                console.error("Error creating product:", error);
            }
        }
    };

    const requestDelete = (id) => {
        setProductToDelete(id);
        setConfirmOpen(true);
    };

    const handleDelete = async () => {
        try {
            await ProductApi.delete(`/products/${productToDelete}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        } finally {
            setConfirmOpen(false);
            setProductToDelete(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Products
                </h1>
                <button
                    onClick={() => {
                        setEditProduct(null);
                        setModalOpen(true);
                        setFormData([
                            {
                                title: "",
                                price: "",
                                description: "",
                                categoryId: 1,
                                images: [""],
                            },
                        ]);
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    + Add Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded shadow p-4 relative"
                    >
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h2 className="text-lg font-semibold mt-2 text-gray-800 dark:text-white">
                            {product.title}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {product.description}
                        </p>
                        <p className="font-bold mt-1 text-indigo-600">
                            ${product.price}
                        </p>

                        <div className="flex justify-between mt-3">
                            <button
                                onClick={() => {
                                    setEditProduct(product);
                                    setModalOpen(true);
                                }}
                                className="px-3 py-1 text-sm bg-yellow-400 text-white rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => requestDelete(product.id)}
                                className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ModalForm
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateOrUpdate}
                initialData={editProduct}
            />
            <ModalDelete
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onSubmit={handleDelete}
            />
        </div>
    );
}
