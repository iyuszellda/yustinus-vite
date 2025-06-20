import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    const fallbackSrc = "https://placehold.co/200x200?text=Image+Not+Found";
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition relative">
            <Link to={`/demo/product/detail/${product.id}`} className="block">
                <div className="relative w-full aspect-square bg-white">
                    <div className="absolute top-0 right-0 text-white text-xs font-semibold px-3 py-1 rounded z-10">
                        {product.category?.name}
                    </div>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        onError={(e) => {
                            e.target.src = fallbackSrc;
                        }}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 left-2 bg-sky-600/90 text-white text-sm font-bold px-3 py-1 rounded">
                        ${product.price}
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h3 className="text-sm font-semibold text-neutral-900 truncate">
                        {product.title}
                    </h3>
                    <p className="text-xs text-neutral-500 truncate">
                        {product.description}
                    </p>
                </div>
            </Link>
        </div>
    );
}
