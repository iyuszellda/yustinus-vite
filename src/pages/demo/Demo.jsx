import { Link } from "react-router-dom";
import Case from "../../components/Case";
export default function Demo() {
    const demoData = [
        {
            title: "Product Showcase",
            description:
                "Explore a stunning collection of products with detailed descriptions and images.",
            icon: "🛍️",
            path: "/demo/product",
        },
        {
            title: "CRUD Operations",
            description:
                "Create, Read, Update, and Delete operations made simple with our intuitive interface.",
            icon: "📝",
            path: "/demo/crud",
        },
        {
            title: "Dark Mode Ready",
            description:
                "Seamlessly toggle between light and dark modes with ease.",
            icon: "🌙",
            path: "/",
        },
    ];
    return (
        <Case>
            <div className="w-[100%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
                        Features
                    </h2>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {demoData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-5xl mb-4 text-indigo-500">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        to={card.path}
                                        className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition duration-300"
                                    >
                                        Demo →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Case>
    );
}
