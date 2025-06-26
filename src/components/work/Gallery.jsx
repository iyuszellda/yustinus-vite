import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "@/components/skeleton/Skeleton";
import SkeletonImage from "@/components/skeleton/SkeletonImage";
import WorksApi from "@/lib/json/works.json";

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
            <>
                <div className="p-10 text-center text-neutral-500">
                    Gallery not found.
                    <button
                        onClick={goBack}
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
            <div className="mt-5 mb-5 md:mt-0 lg:mt-0 grid grid-cols-3 md:grid-cols-9 gap-4">
                <button
                    onClick={goBack}
                    className="font-semibold cursor-pointer rounded-full text-neutral-800 dark:text-neutral-200 text-md"
                >
                    ← Back
                </button>
            </div>
            <div className="w-full px-4">
                <div className="space-y-4">
                    <SkeletonImage
                        src={`/images/${mainImage}`}
                        alt={gallery.name}
                        className="rounded-lg object-cover w-[100%] h-auto"
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
