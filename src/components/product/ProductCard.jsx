import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    const [imgSrc, setImgSrc] = useState(product.images[0]);
    const fallbackSrc = "https://placehold.co/200x200?text=Image+Not+Found";
    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-neutral-700 shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <Link to={`/demo/product/detail/${product.id}`} className="block">
                <div className="relative bg-transparent">
                    <div className="relative w-full max-w-md mx-auto">
                        <img
                            src={imgSrc}
                            alt={product.slug}
                            className="w-full h-auto scale-90 aspect-square rounded-md object-contain group-hover:opacity-75 lg:aspect-auto"
                            onError={() => {
                                if (imgSrc !== fallbackSrc) {
                                    setImgSrc(fallbackSrc);
                                }
                            }}
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-0 left-0 lg:m-5 md:m-4 m-3">
                            <small className="text-white text-xs font-semibold px-1 py-1">
                                {product.category.name}
                            </small>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-sky-600 px-5 py-2 text-white text-sm">
                            <span className="font-bold">$ {product.price}</span>
                        </div>
                    </div>
                    <div className="hover:bg-neutral-700 transition duration-300 absolute opacity-25"></div>
                </div>
            </Link>
            <div className="px-6 py-3">
                <Link
                    to={`/demo/product/detail/${product.id}`}
                    className="font-semibold text-sm md:text-md lg:text-md text-neutral-950 dark:text-neutral-100 inline-block hover:text-neutral-600 transition duration-500 ease-in-out"
                >
                    {product.title.substring(0, 25)}
                    {product.title.length > 25 ? "..." : ""}
                </Link>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-md lg:text-md mt-2">
                    {product.description.substring(0, 50)}
                    {product.description.length > 50 ? "..." : ""}
                </p>
            </div>
        </div>
    );
}
