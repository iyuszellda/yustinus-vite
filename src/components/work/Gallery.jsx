import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonCard from "../skeleton/SkeletonCard";
import WorksApi from "../../lib/json/works.json";

export default function Gallery() {
    const { companyId, appId } = useParams();
    const [gallery, setGallery] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                // const response = await WorksApi;
                const company = WorksApi.find(
                    (c) => c.id === Number(companyId),
                );
                const application = company?.applications.find(
                    (a) => a.id === Number(appId),
                );
                setGallery(application);
                setMainImage(application.detail.images[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [companyId, appId]);
    // console.log("company:", companyId);
    // console.log("app:", appId);
    if (loading) {
        return <SkeletonCard isDetail={true} />;
    }

    if (!gallery) {
        return (
            <>
                <div className="p-10 text-center text-neutral-500">
                    Gallery not found.
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
                    ← Back
                </button>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-4 gap-5">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <img
                        src={mainImage}
                        alt={gallery.name}
                        className="rounded-lg object-contain w-full max-w-md mx-auto h-96"
                    />
                    <div className="flex gap-2 justify-center">
                        {gallery.detail.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`h-16 rounded-md cursor-pointer border-2 ${
                                    img === mainImage
                                        ? "border-blue-600"
                                        : "border-transparent"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
