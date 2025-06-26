import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductApi from "@/lib/api/productApi";
import Skeleton from "@/components/skeleton/Skeleton";
import SkeletonImage from "@/components/skeleton/SkeletonImage";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await ProductApi.get(`/products/${id}`);
                setProduct(response.data);
                setMainImage(response.data.images[0]);
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
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <Skeleton type={"card"} isDetail={true} />;
    }

    const goBack = () => {
        navigate(-1);
        window.scrollTo(0, 0);
    };

    if (!product) {
        return (
            <>
                <div className="p-10 text-center text-neutral-500">
                    Product not found.
                    <button
                        aria-label="back to list product not found"
                        onClick={goBack}
                        className="px-4 py-2 bg-neutral-200 dark:bg-neutral-200 cursor-pointer rounded-full text-neutral-800"
                    >
                        ← Go Back
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="mt-5 md:mb-4 lg:mb-4 md:mt-0 lg:mt-0 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <button
                    aria-label="back to list product"
                    onClick={goBack}
                    className="font-semibold cursor-pointer rounded-full text-neutral-800 dark:text-neutral-200 text-md"
                >
                    ← Back
                </button>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-5">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <SkeletonImage
                        src={mainImage}
                        alt={product.title}
                        className="rounded-lg object-contain w-full aspect-[3/3] max-w-md mx-auto h-auto"
                    />
                    <div className="flex gap-2 justify-center">
                        {product.images &&
                            product.images.map((img, idx) => (
                                <SkeletonImage
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    className={`w-16 h-16 rounded-md cursor-pointer border-2 ${
                                        img === mainImage
                                            ? "border-blue-600"
                                            : "border-transparent"
                                    }`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <h1 className="lg:text-3xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                        {product.title}
                    </h1>
                    <p className="text-md text-slate-800 dark:text-slate-300 font-semibold">
                        ${product.price}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {product.description}
                    </p>
                    <button
                        aria-label="add to card button"
                        className="text-xs px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}
