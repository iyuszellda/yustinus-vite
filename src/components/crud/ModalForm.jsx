import { useState, useEffect } from "react";
import Select from "react-select";
import ProductApi from "@/lib/api/productApi";
import SkeletonImage from "@/components/skeleton/SkeletonImage";

const ModalForm = ({
    header,
    product,
    categories,
    isOpen,
    onClose,
    onSave,
}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [optionImage, setOptionImage] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [optionCategory, setOptionCategory] = useState(null);
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
                setOptionImage(
                    response.data.map((c) => ({
                        value: c.id,
                        label: c.title,
                        image: c.images,
                    })),
                );
                setOptionCategory(
                    categories.map((c) => ({
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

        fetchProducts();
    }, [categories]);

    useEffect(() => {
        if (product) {
            if (header == 1) {
                setProductData({
                    title: product.title,
                    price: product.price,
                    images: product.images,
                    description: product.description,
                    categoryId: product && product.categoryId,
                });
                // reset option on create product
                setSelectedImage(null);
                setSelectedCategory(null);
            } else {
                setProductData({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    images: product.images,
                    description: product.description,
                });
                // set selected image from updated images
                setSelectedImage({
                    value: product.id,
                    label: product.title,
                    image: product.images,
                });
            }
        }
    }, [product, header]);

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
            images: option.image,
        }));
    };

    const handleSelectCategory = (option) => {
        setSelectedCategory(option);
        setProductData((prev) => ({
            ...prev,
            categoryId: option.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(productData);
        onClose();
    };

    if (!isOpen || !product) return null;

    return (
        <div className="p-3 fixed inset-0 bg-neutral-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg text-neutral-800 font-bold mb-4">
                    {header == 1 ? "Add Product" : "Edit Product"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-neutral-700"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Type Title"
                            value={productData?.title || ""}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-neutral-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-neutral-700"
                        >
                            Images
                        </label>
                        <Select
                            options={optionImage}
                            value={selectedImage}
                            placeholder="Choose image"
                            onChange={handleSelectImage}
                            formatOptionLabel={({ label, image }) => (
                                <div className="flex items-center gap-2">
                                    <SkeletonImage
                                        src={image}
                                        alt={label}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span>{label}</span>
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
                                className="block text-sm font-medium text-neutral-700"
                            >
                                Category
                            </label>
                            <Select
                                options={optionCategory}
                                value={selectedCategory}
                                placeholder="Choose category"
                                onChange={handleSelectCategory}
                                formatOptionLabel={({ label, image }) => (
                                    <div className="flex items-center gap-2">
                                        <SkeletonImage
                                            src={image}
                                            alt={label}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span>{label}</span>
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
                            className="block text-sm font-medium text-neutral-700"
                        >
                            Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            placeholder="Numbers only"
                            value={productData?.price || ""}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-neutral-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-neutral-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Type Description"
                            value={productData?.description || ""}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 w-full border border-neutral-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            aria-label="submit product"
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                        >
                            Save
                        </button>
                        <button
                            aria-label="cancel modal"
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
