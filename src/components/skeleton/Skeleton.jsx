import Logo from "@/assets/yustinus_logo.png";
import Case from "@/components/Case";
import SkeletonCard from "./SkeletonCard";
import DemoSkeleton from "./DemoSkeleton";

export default function Skeleton({ type, isDetail }) {
    switch (type) {
        case "crud":
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
                                    <th className="px-4 py-2 text-left">
                                        Title
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Price
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Image
                                    </th>
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

        case "table":
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

        case "card":
            return <SkeletonCard isDetail={isDetail} isProduct={true} />;

        case "gallery":
            return <SkeletonCard isDetail={isDetail} />;

        case "product":
            return (
                <div className="flex min-h-screen md:mt-0 mt-14">
                    <div className="fixed mt-2 top-9 left-0 right-0 w-full bg-white dark:bg-neutral-900 border-t z-40 flex justify-around items-center py-2 md:hidden">
                        <div className="relative w-full mx-3">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                            <div className="w-full h-9 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse"></div>
                        </div>
                    </div>
                    <div className="hidden md:block lg:block w-64 p-3 fixed h-full overflow-y-auto">
                        <div className="p-4 bg-white dark:bg-neutral-700 rounded-lg animate-pulse">
                            <div className="h-6 w-1/3 bg-neutral-300 dark:bg-neutral-600 rounded mb-4"></div>

                            <div className="mb-6">
                                <div className="h-5 w-1/4 bg-neutral-300 dark:bg-neutral-600 rounded mb-3"></div>
                                <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-600 rounded-md"></div>
                            </div>
                            <div className="mb-6">
                                <div className="h-5 w-1/4 bg-neutral-300 dark:bg-neutral-600 rounded mb-3"></div>
                                <div className="flex gap-2">
                                    <div className="w-1/2 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                                    <div className="w-1/2 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                                </div>
                            </div>

                            <div className="h-8 w-full bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                        </div>
                    </div>
                    <div className="w-[100%] mx-auto md:ml-64 lg:ml-64">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-neutral-700 rounded-lg overflow-hidden animate-pulse"
                                >
                                    <div className="relative w-full aspect-square bg-neutral-300 dark:bg-neutral-600">
                                        <div className="absolute top-2 right-2 w-16 h-5 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
                                        <div className="absolute bottom-2 left-2 w-12 h-6 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <div className="h-5 w-3/4 bg-neutral-300 dark:bg-neutral-600 rounded mb-2"></div>
                                        <div className="space-y-1">
                                            <div className="h-3 w-full bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                                            <div className="h-3 w-5/6 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case "about":
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

        case "work":
            return (
                <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8 animate-pulse">
                    <h4 className="hidden md:block lg:block text-2xl font-semibold text-neutral-900 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-700 h-7 w-2/3 rounded"></h4>
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-4 bg-slate-300/50 dark:bg-slate-700/50 space-y-4"
                        >
                            <div className="h-5 w-1/4 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="h-4 w-[90%] bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <ul className="mt-2 space-y-2">
                                <li className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded"></li>
                                <li className="h-4 w-2/3 bg-neutral-300 dark:bg-neutral-700 rounded"></li>
                                <li className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-700 rounded"></li>
                            </ul>
                        </div>
                    ))}
                </div>
            );

        case "demo":
            return (
                <Case>
                    <h3 className="hidden pt-15 md:block lg:block text-2xl font-extrabold text-center text-neutral-700 dark:text-white mb-12">
                        Demo Projects
                    </h3>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <DemoSkeleton />
                        <DemoSkeleton />
                        <DemoSkeleton />
                    </div>
                </Case>
            );

        case "experience":
            return (
                <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                    <h4 className="hidden md:block lg:block font-semibold">
                        <div className="h-8 w-1/4 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                    </h4>
                    {[...Array(4)].map((_, idx) => (
                        <div
                            key={idx}
                            className="group relative grid pb-1 bg-slate-300/50 dark:bg-slate-700/50 px-4 py-4 transition-transform sm:grid-cols-8 sm:gap-8 md:gap-4 animate-pulse rounded-lg"
                        >
                            <header className="z-10 mb-2 mt-1 font-semibold uppercase tracking-wide sm:col-span-2">
                                <div className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                            </header>
                            <div className="z-10 sm:col-span-6 space-y-4 mb-3">
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

        case "home":
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

        default:
            return (
                <div className="w-full flex justify-center items-center mt-50">
                    <img
                        src={Logo}
                        alt="Loading..."
                        className="w-16 h-16 animate-spin"
                    />
                </div>
            );
    }
}
