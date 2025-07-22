import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Skeleton from "@/components/skeleton/Skeleton";
import SkeletonImage from "@/components/skeleton/SkeletonImage";
import WorksApi from "@/lib/json/works.json";

export default function Gallery() {
    const navigate = useNavigate();
    const { companyId, appId } = useParams();
    const [gallery, setGallery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const company = WorksApi.find(
                    (c) => c.id === Number(companyId),
                );
                const application = company?.applications.find(
                    (a) => a.id === Number(appId),
                );
                setGallery(application);
                setMainImage(application && application.detail.images[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setTimeout(() => setLoading(false), 300);
            }
        };
        fetchProduct();
    }, [companyId, appId]);

    if (loading) {
        return <Skeleton type={"gallery"} isDetail={true} />;
    }

    const goBack = () => {
        navigate(-1);
        window.scrollTo(0, 0);
    };

    if (!gallery) {
        return (
            <div className="p-10 text-center text-neutral-500">
                Gallery not found.
                <button
                    aria-label="back to list work"
                    onClick={goBack}
                    className="px-4 py-2 bg-neutral-200 dark:bg-neutral-200 hover:bg-neutral-300 rounded-full text-neutral-800"
                >
                    ← Go Back
                </button>
            </div>
        );
    }

    return (
        <>
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
            <div className="w-full px-4 mt-10 md:mt-1">
                <div className="space-y-4">
                    <SkeletonImage
                        src={`/images/${mainImage}`}
                        alt={gallery.name}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                    <div className="flex gap-2 justify-center">
                        {gallery.detail.images.map((img, idx) => (
                            <SkeletonImage
                                key={idx}
                                src={`/images/${img}`}
                                alt={`Thumbnail ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-auto rounded-md cursor-pointer hover:opacity-75 border-2 ${
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
