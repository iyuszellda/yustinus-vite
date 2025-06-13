import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-neutral-700 shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <Link to={`/demo/product/detail/${product.id}`} className="block">
                <div className="relative bg-transparent">
                    <img
                        className="w-full scale-90 aspect-square rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        src={product.images[0]}
                        alt={product.slug}
                    />
                    <div className="hover:bg-neutral-700 transition duration-300 absolute opacity-25"></div>
                    <div className="absolute bottom-0 left-0 bg-sky-600 px-4 py-2 text-white text-sm transition duration-500 ease-in-out">
                        <span className="font-bold">$ {product.price}</span>
                    </div>
                    <div className="flex text-xs md:text-sm lg:text-sm absolute md:top-12 md:left-6 lg:top-12 lg:left-6 bg-auto text-white flex-col items-center justify-center">
                        <span className="font-bold">
                            <small>{product.category.name}</small>
                        </span>
                    </div>
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
