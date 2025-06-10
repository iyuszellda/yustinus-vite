import React, { useState, useEffect } from "react";

export function ProductModal({ isOpen, onClose, onSubmit, initialData }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTitle(initialData?.title || "");
        setPrice(initialData?.price || "");
        setDescription(initialData?.description || "");
    }, [initialData]);

    if (!isOpen) return null;

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ title, price: Number(price), description });
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h2 className="text-xl font-semibold mb-4">
                    {initialData ? "Edit Product" : "Add Product"}
                </h2>
                <label className="block mb-2">
                    Title
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full border p-2 mt-1 rounded"
                    />
                </label>
                <label className="block mb-2">
                    Price
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full border p-2 mt-1 rounded"
                    />
                </label>
                <label className="block mb-4">
                    Description
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full border p-2 mt-1 rounded"
                    />
                </label>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        type="button"
                        className="px-4 py-2 bg-gray-300 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
