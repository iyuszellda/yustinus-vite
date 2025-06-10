import { useState, useEffect } from "react";
import Select from "react-select";
import ProductApi from "../../lib/api/productApi";

const ModalForm = ({ header, product, isOpen, onClose, onSave }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectImage, setSelectImage] = useState();
    const [editedProduct, setEditedProduct] = useState({
        title: "",
        price: "",
        description: "",
        images: "",
        categoryId: 1,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.get("/products");
                setSelectImage(response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (product) {
            setSelectedOption(product);
            if (header == 1) {
                setEditedProduct({
                    title: product.title || "",
                    price: product.price || 0,
                    description: product.description || "",
                    categoryId: (product.category && product.category.id) || 1,
                    images: product.images || "",
                });
            } else {
                setEditedProduct({
                    id: product.id,
                    title: product.title || "",
                    price: product.price || 0,
                    description: product.description || "",
                    categoryId: (product.category && product.category.id) || 1,
                    images: product.images || "",
                });
            }
        }
    }, [product, header]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (option) => {
        setSelectedOption(option);
        setEditedProduct((prev) => ({
            ...prev,
            images: option.images,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedProduct);
        onClose();
    };

    if (!isOpen || !product) return null;

    return (
        <div className="p-3 fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg text-neutral-800 font-bold mb-4">
                    {header == 1 ? "Add Product" : "Edit Product"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={editedProduct.title}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Images
                        </label>
                        <Select
                            options={selectImage}
                            value={selectedOption}
                            onChange={handleSelectChange}
                            formatOptionLabel={({ title, images }) => (
                                <div className="flex items-center gap-2">
                                    <img
                                        src={images}
                                        alt={title}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span>{title}</span>
                                </div>
                            )}
                            className="react-select-container"
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={editedProduct.price}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={editedProduct.description}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
