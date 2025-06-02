import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
            <Link to={`/demo/product/detail/${product.id}`} className="block">
                <div className="relative bg-transparent">
                    <img
                        className="w-full scale-90 aspect-square rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        src={product.images[0]}
                        alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-neutral-700 transition duration-300 absolute bottom-0 top-0 right-0 left-0 opacity-25"></div>
                    <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">$ {product.price}</span>
                    </div>
                    <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">
                            <small>{product.category.slug}</small>
                        </span>
                    </div>
                </div>
            </Link>
            <div className="px-6 py-3">
                <Link
                    to={`/demo/product/detail/${product.id}`}
                    className="font-semibold text-sm text-neutral-950 dark:text-neutral-100 inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                    {product.title}
                </Link>
                <p className="text-gray-500 dark:text-neutral-400 text-xs mt-2">
                    {product.description.substring(0, 50)}
                    ...
                </p>
            </div>
        </div>
    );
}
