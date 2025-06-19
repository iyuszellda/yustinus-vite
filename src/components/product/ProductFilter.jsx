import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Select from "react-select";

export default function ProductFilterMobile({
    optionCategory,
    selectedCategory,
    price,
    handleSelectCategory,
    setPrice,
    handleClear,
    isResetting,
    fallbackSrc,
    isMobile,
    handleMinPrice,
    handleMaxPrice,
}) {
    const [showFilter, setShowFilter] = useState(false);
    useEffect(() => {
        if (showFilter) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showFilter]);

    function applyHandler() {
        setShowFilter(false);
        isResetting(true);
    }

    return isMobile ? (
        <>
            <div className="fixed mt-2 top-9 left-0 right-0 w-full bg-white dark:bg-neutral-900 border-t z-40 flex justify-around items-center py-2 md:hidden">
                <input
                    type="text"
                    placeholder="Search products..."
                    readOnly={true}
                    onClick={() => setShowFilter(true)}
                    className="text-sm text-black dark:text-white w-full md:w-1/2 p-2 border-1 rounded ml-3 mr-3 pl-10 pr-4"
                />
                <Search
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                />
            </div>

            {showFilter && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-neutral-800 md:hidden flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-center p-4 border-b border-neutral-300 dark:border-neutral-700">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                            Filters
                        </h2>
                        <button
                            onClick={() => setShowFilter(false)}
                            className="text-sm text-gray-600 dark:text-gray-300"
                        >
                            ✖
                        </button>
                    </div>

                    <div className="flex-1 p-4">
                        <div className="mb-6">
                            <h3 className="font-medium mb-2 text-sm text-gray-700 dark:text-white">
                                Category
                            </h3>
                            <Select
                                options={optionCategory}
                                value={selectedCategory}
                                onChange={handleSelectCategory}
                                placeholder="Choose category"
                                formatOptionLabel={({ label, image }) => (
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={image}
                                            alt={label}
                                            className="w-6 h-6 rounded-full object-cover"
                                            onError={(e) => {
                                                e.target.src = fallbackSrc;
                                            }}
                                        />
                                        <span>{label}</span>
                                    </div>
                                )}
                                className="react-select-container bg-white dark:bg-neutral-700"
                                classNamePrefix="react-select"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                Price Range
                            </label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    placeholder="Min"
                                    min={0}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(
                                            /\D/g,
                                            "",
                                        );
                                    }}
                                    value={price?.[0]}
                                    onChange={(e) =>
                                        setPrice([e.target.value, price[1]])
                                    }
                                    className="w-1/2 px-2 py-1 border rounded text-sm bg-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Max"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(
                                            /\D/g,
                                            "",
                                        );
                                    }}
                                    value={price?.[1]}
                                    onChange={(e) =>
                                        setPrice([price[0], e.target.value])
                                    }
                                    className="w-1/2 px-2 py-1 border rounded text-sm bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 p-4 flex gap-2">
                        <button
                            className="flex-1 px-2 py-2 text-sm bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-neutral-600"
                            onClick={() => {
                                handleClear();
                                setShowFilter(false);
                            }}
                            disabled={isResetting}
                        >
                            Clear
                        </button>
                        <button
                            className="flex-1 px-2 py-2 text-sm bg-amber-500 dark:bg-amber-300 text-white dark:text-neutral-800 rounded hover:bg-amber-400"
                            onClick={applyHandler}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </>
    ) : (
        <div className="hidden md:block lg:block w-64 p-3 fixed h-full overflow-y-auto">
            <div className="p-4 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Category</h3>
                    <Select
                        options={optionCategory}
                        value={selectedCategory}
                        onChange={handleSelectCategory}
                        placeholder="Choose category"
                        formatOptionLabel={({ label, image }) => (
                            <div className="flex items-center gap-2">
                                <img
                                    src={image}
                                    alt={label}
                                    className="w-6 h-6 rounded-full"
                                    onError={(e) => {
                                        e.target.src = fallbackSrc;
                                    }}
                                />
                                <span>{label}</span>
                            </div>
                        )}
                        className="react-select-container bg-white dark:bg-neutral-700"
                        classNamePrefix="react-select"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                        Price Range
                    </label>
                    <div className="flex gap-2 items-center">
                        <input
                            type="text"
                            min={0}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                    /\D/g,
                                    "",
                                );
                            }}
                            placeholder="Min"
                            value={price?.[0]}
                            onChange={handleMinPrice}
                            className="w-1/2 px-2 py-1 border rounded text-sm"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                    /\D/g,
                                    "",
                                );
                            }}
                            placeholder="Max"
                            value={price?.[1]}
                            onChange={handleMaxPrice}
                            className="w-1/2 px-2 py-1 border rounded text-sm"
                        />
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <button
                        className="w-1/2 px-2 py-1 text-sm bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-900"
                        onClick={handleClear}
                        disabled={isResetting}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
