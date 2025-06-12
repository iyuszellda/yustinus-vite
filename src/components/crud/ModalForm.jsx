import { useState, useEffect } from "react";
import Select from "react-select";
import ProductApi from "../../lib/api/productApi";

const ModalForm = ({
    header,
    product,
    categories,
    isOpen,
    onClose,
    onSave,
}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectImage, setSelectImage] = useState();
    const [productData, setProductData] = useState({
        title: "",
        price: "",
        description: "",
        images: "",
        categoryId: "",
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
        setSelectedImage(product);
        if (product) {
            if (header == 1) {
                setProductData({
                    title: product.title || "",
                    price: product.price || 0,
                    description: product.description || "",
                    categoryId: (categories && categories.id) || 1,
                    images: product.images || "",
                });
            } else {
                setProductData({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    images: product.images,
                });
            }
        }
    }, [product, categories, header]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setProductData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectImage = (option) => {
        setSelectedImage(option);
        setProductData((prev) => ({
            ...prev,
            images: option.images,
        }));
    };

    const handleSelectCategory = (option) => {
        setSelectedCategory(option);
        setProductData((prev) => ({
            ...prev,
            categoryId: option.id,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(productData);
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
                            value={productData.title}
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
                            value={selectedImage}
                            onChange={handleSelectImage}
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
                    {header == 1 && (
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <Select
                                options={categories}
                                value={selectedCategory}
                                onChange={handleSelectCategory}
                                formatOptionLabel={({ name, image }) => (
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span>{name}</span>
                                    </div>
                                )}
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />
                        </div>
                    )}

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
                            value={productData.price}
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
                            value={productData.description}
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
