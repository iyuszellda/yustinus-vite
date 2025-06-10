export function ProductItem({ product, onEdit, onDelete }) {
    return (
        <li className="border p-3 rounded flex justify-between items-center">
            <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(product)}
                    className="px-2 py-1 bg-yellow-400 text-white rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(product.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
