import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";
import SkeletonImage from "@/components/skeleton/SkeletonImage";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const { data } = await ProductApi.get(`/products/${id}`);
                setProduct(data);
                setMainImage(data.images?.[0] || "");
            } catch (error) {
                if (ProductApi.isAxiosError(error)) {
                    console.error("❌ Axios error:", error.message);
                } else {
                    console.error("⚠️ Unexpected error:", error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const goBack = () => {
        navigate(-1);
        window.scrollTo(0, 0);
    };

    if (loading) return <Skeleton type="card" isDetail={true} />;

    if (!product) {
        return (
            <div className="p-10 text-center text-neutral-500 overflow-hidden">
                <p>Product not found.</p>
                <button
                    onClick={goBack}
                    className="mt-4 px-4 py-2 text-neutral-700 cursor-pointer dark:text-neutral-300"
                >
                    ← Go Back
                </button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto px-4 py-6 space-y-8 overflow-x-hidden"
        >
            {/* Back Button */}
            <div className="items-center justify-between mb-4 md:block hidden">
                <motion.button
                    onClick={goBack}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                    <FiArrowLeft className="text-base" />
                    Back
                </motion.button>
            </div>

            {/* Product Detail */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <SkeletonImage
                        src={mainImage}
                        alt={product.title}
                        className="rounded-lg w-full aspect-square object-contain"
                    />
                    <div className="flex flex-wrap justify-center gap-3">
                        {product.images?.map((img, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <SkeletonImage
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    onClick={() => setMainImage(img)}
                                    className={`w-16 h-16 object-cover rounded-md border-2 cursor-pointer transition ${
                                        img === mainImage
                                            ? "border-blue-600"
                                            : "border-transparent"
                                    }`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                        {product.title}
                    </h1>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        ${product.price}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {product.description}
                    </p>
                    <button
                        aria-label="add to cart"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-sm"
                    >
                        <FiShoppingCart className="text-lg" />
                        Add to Cart
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
