import { Link } from "react-router-dom";

export default function ProductCard({ product, index }) {
    const fallbackSrc = "https://placehold.co/200x200?text=Image+Not+Found";
    return (
        <>
            <div className="bg-white dark:bg-neutral-700 rounded-lg overflow-hidden shadow group hover:shadow-xl transition duration-300 ease-in-out relative">
                <Link
                    to={`/demo/product/detail/${product.id}`}
                    className="block"
                >
                    <div className="relative w-full aspect-square overflow-hidden bg-white dark:bg-neutral-700">
                        <div className="absolute top-1 right-1 text-white text-xs font-semibold px-3 py-1 rounded z-10">
                            {product.category?.name}
                        </div>
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            onError={(e) => {
                                e.target.src = fallbackSrc;
                            }}
                            width={160}
                            height={160}
                            className="w-full aspect-[3/3] object-cover group-hover:opacity-75"
                            loading={index < 2 ? "eager" : "lazy"}
                        />
                        <div className="absolute bottom-2 left-2 bg-sky-600/90 text-white text-sm font-bold px-3 py-1 rounded">
                            ${product.price}
                        </div>
                    </div>
                    <div className="px-4 py-3">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                            {product.title}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-200 truncate">
                            {product.description}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
