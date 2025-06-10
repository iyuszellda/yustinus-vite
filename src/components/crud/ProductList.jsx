import React from "react";
import { ProductItem } from "./ProductItem.jsx";

export function ProductList({ products, onEdit, onDelete }) {
    return (
        <ul className="space-y-3">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
