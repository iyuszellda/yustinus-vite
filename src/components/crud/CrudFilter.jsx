export default function CrudFilter({
    filterText,
    setFilterText,
    handleAdd,
    isMobile,
}) {
    return isMobile ? (
        <div className="z-10 fixed mt-2 top-9 left-0 right-0 flex bg-white px-4 py-4 shadow-md justify-between items-center flex-col md:flex-row gap-2 mb-4 rounded-md">
            <input
                id="filter mobile"
                type="text"
                placeholder="Search products..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="text-sm w-full md:w-1/2 p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 mr-3"
            />
            <button
                aria-label="handle add"
                className="text-xs cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => handleAdd()}
            >
                Add Product
            </button>
        </div>
    ) : (
        <div className="flex bg-white px-4 py-4 shadow-md justify-between items-center flex-col md:flex-row gap-2 mb-4 rounded-md">
            <input
                id="filter desktop"
                type="text"
                placeholder="Search products..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="text-sm w-full md:w-1/2 p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 mr-3"
            />
            <button
                aria-label="add product"
                className="text-xs cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => handleAdd()}
            >
                Add Product
            </button>
        </div>
    );
}
