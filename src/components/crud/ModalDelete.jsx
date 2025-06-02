import { Dialog } from "@headlessui/react";
export default function ModalForm({ isOpen, onClose, onSubmit }) {
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
                        Confirm Deletion
                    </Dialog.Title>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Are you sure you want to delete this product?
                    </p>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => onClose(false)}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onSubmit}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
