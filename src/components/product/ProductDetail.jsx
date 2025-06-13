import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductApi from "@/lib/api/productApi";
// import SkeletonCard from "@/components/skeleton/SkeletonCard";
import Skeleton from "@/components/skeleton/Skeleton";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await ProductApi.get(`/products/${id}`);
                setProduct(response.data);
                setMainImage(response.data.images[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <Skeleton type={"card"} isDetail={true} />;
    }

    if (!product) {
        return (
            <>
                <div className="p-10 text-center text-neutral-500">
                    Product not found.
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 bg-neutral-200 dark:bg-neutral-200 hover:bg-neutral-300 rounded-full text-neutral-800"
                    >
                        ← Go Back
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex items-center px-4 py-4">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-neutral-200 dark:bg-neutral-200 hover:bg-neutral-300 rounded-full text-neutral-800"
                >
                    ← Go Back
                </button>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-4 grid md:grid-cols-2 gap-5">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="rounded-lg object-contain w-full max-w-md mx-auto h-96"
                    />
                    <div className="flex gap-2 justify-center">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`w-16 h-16 rounded-md cursor-pointer border-2 ${
                                    img === mainImage
                                        ? "border-blue-600"
                                        : "border-transparent"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {product.title}
                    </h1>
                    <p className="text-md text-slate-800 dark:text-slate-300 font-semibold">
                        ${product.price}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        {product.description}
                    </p>
                    <button className="text-xs px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}
