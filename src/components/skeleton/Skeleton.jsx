import Case from "@/components/Case";
import SkeletonCard from "./SkeletonCard";

export default function Skeleton({ type, isDetail }) {
    if (type == "crud") {
        return (
            <div className="w-full">
                <div className="overflow-x-auto">
                    <h1 className="hidden md:block lg:block text-2xl font-extrabold text-center text-neutral-700 dark:text-white mb-12">
                        Product List
                    </h1>
                    <div className="flex justify-end px-4 py-4">
                        <div className="md:grid lg:grid grid-cols-2 content-center gap-3"></div>
                    </div>
                    <table className="text-sm min-w-full table-auto">
                        <thead className="text-neutral-900 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900">
                            <tr>
                                <th className="px-4 py-2 text-left">Title</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Image</th>
                                <th className="px-4 py-2 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-t animate-pulse text-neutral-900 dark:text-neutral-50"
                                >
                                    <td className="px-4 py-2">
                                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4"></div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-1/2"></div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="w-16 h-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="md:grid lg:grid grid-cols-2 content-center gap-3">
                                            <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                            <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    if (type == "table") {
        return (
            <table className="text-sm min-w-full table-auto">
                <tbody>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <tr
                            key={index}
                            className="border-t animate-pulse text-neutral-900 dark:text-neutral-50"
                        >
                            <td className="px-4 py-2">
                                <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4"></div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-1/2"></div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="w-16 h-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="md:grid lg:grid grid-cols-2 content-center gap-3">
                                    <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                    <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
    if (type == "card") {
        return <SkeletonCard isDetail={isDetail} />;
    }
    if (type == "product") {
        return (
            <div className="w-full mx-auto">
                <h2 className="hidden md:block lg:block text-2xl font-bold text-center mb-6">
                    Product List
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                    {[...Array(8)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        );
    }
    if (type == "about") {
        return (
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8 animate-pulse">
                <div className="hidden md:block lg:block h-6 w-1/3 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-11/12 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-10/12 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-4/5 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-10/12 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    <div className="h-4 w-2/3 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
            </div>
        );
    }
    if (type == "work") {
        return (
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8 animate-pulse">
                <h4 className="hidden md:block lg:block font-semibold bg-neutral-300 dark:bg-neutral-500 rounded-lg w-1/2 h-6"></h4>

                <div className="rounded-2xl p-4 bg-neutral-200 dark:bg-neutral-700 transition-all duration-300 shadow-lg">
                    <div className="h-5 bg-neutral-300 dark:bg-neutral-600 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-2/3 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-full"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[90%]"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[85%]"></div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-1/2"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[60%]"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[70%]"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[55%]"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[65%]"></li>
                    </ul>
                </div>
                <div className="rounded-2xl p-4 bg-neutral-200 dark:bg-neutral-700 transition-all duration-300 shadow-lg">
                    <div className="h-5 bg-neutral-300 dark:bg-neutral-600 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-2/3 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-full"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[90%]"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[85%]"></div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-1/2"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[60%]"></li>
                        <li className="h-3 bg-neutral-200 dark:bg-neutral-500 rounded w-[70%]"></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (type == "demo") {
        return (
            <Case>
                <div className="w-full max-w-2xl mx-auto mt-10 flex flex-col gap-8 p-4">
                    <div className="group relative pb-1 transition-all sm:gap-8 md:gap-4">
                        <div className="hidden md:block lg:block text-2xl font-extrabold text-center text-neutral-700 dark:text-white mb-12">
                            Demo Projects
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-neutral-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between animate-pulse"
                                >
                                    <div>
                                        <div className="mb-4 bg-neutral-400 dark:bg-neutral-300 rounded-full w-12 h-12"></div>
                                        <div className="h-6 bg-neutral-300 dark:bg-neutral-400 rounded w-3/4 mb-2"></div>
                                        <div className="h-4 bg-neutral-300 dark:bg-neutral-400 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-neutral-300 dark:bg-neutral-400 rounded w-full"></div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="h-8 bg-neutral-300 dark:bg-neutral-400 rounded-lg w-20 mx-auto"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Case>
        );
    }
    if (type == "experience") {
        return (
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="hidden md:block lg:block font-semibold">
                    <div className="h-8 w-1/4 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                </h4>

                {[...Array(4)].map((_, idx) => (
                    <div
                        key={idx}
                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 animate-pulse"
                    >
                        <header className="z-10 mb-2 mt-1 font-semibold uppercase tracking-wide sm:col-span-2">
                            <div className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                        </header>

                        <div className="z-10 sm:col-span-6 space-y-4">
                            <div className="h-5 w-3/4 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                                <div className="h-4 w-5/6 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                            </div>

                            <ul className="flex flex-wrap gap-2 mt-2">
                                {[...Array(5)].map((__, j) => (
                                    <li key={j}>
                                        <div className="h-6 bg-neutral-300 dark:bg-neutral-600 rounded-full px-4"></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8 animate-pulse">
            <div className="h-10 md:h-12 lg:h-16 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-[95%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-[90%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-[85%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-[80%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-[90%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-[95%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-4/5 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-[85%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-[95%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-[90%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                <div className="h-4 w-4/5 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
        </div>
    );
}
