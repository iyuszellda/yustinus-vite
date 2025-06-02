import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

export default function ModalForm({ isOpen, onClose, onSubmit, initialData }) {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        categoryId: 1,
        images: [""],
    });

    const exampleImages = [
        "https://i.imgur.com/1N3C1vL.jpeg",
        "https://i.imgur.com/aY2Vzbm.jpg",
        "https://i.imgur.com/RL3dAGg.png",
    ];

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Dialog
            open={isOpen}
            onClose={() => onClose(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white dark:bg-gray-800 rounded p-6 max-w-sm w-full shadow-xl">
                    <Dialog.Title className="text-lg font-bold mb-4 dark:text-white">
                        Add New Product
                    </Dialog.Title>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full px-3 py-2 border rounded"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            className="w-full px-3 py-2 border rounded"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    price: parseFloat(e.target.value),
                                })
                            }
                            required
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full px-3 py-2 border rounded"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            required
                        />
                        <select
                            className="w-full px-3 py-2 border rounded"
                            value={formData.categoryId}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    categoryId: Number(e.target.value),
                                })
                            }
                        >
                            <option value={1}>Clothes</option>
                            <option value={2}>Electronics</option>
                            <option value={3}>Furniture</option>
                        </select>
                        <select
                            className="w-full px-3 py-2 border rounded"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    images: [e.target.value],
                                })
                            }
                        >
                            {exampleImages.map((img, i) => (
                                <option key={i} value={img}>
                                    {img}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                        >
                            Save
                        </button>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
