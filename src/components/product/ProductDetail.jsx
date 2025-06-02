import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductApi from "../../lib/api/productApi";
import SkeletonCard from "../skeleton/SkeletonCard";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);

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
        return <SkeletonCard isDetail={true} />;
    }

    if (!product) {
        return (
            <div className="p-10 text-center text-red-500">
                Product not found.
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
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
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.title}
                </h1>
                <p className="text-xl text-rose-600 dark:text-rose-400 font-semibold">
                    ${product.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    {product.description}
                </p>
                <button className="px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
