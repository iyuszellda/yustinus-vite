import { useState, useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Skeleton from "./components/skeleton/Skeleton";
import Logo from "@/assets/yustinus_logo.png";

// Lazy-load layout components
const Navbar = lazy(() => import("./components/nav/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./ScrollToTop"));

export default function App() {
    const lastTheme = localStorage.getItem("theme") === null ? true : false;
    const [theme, setTheme] = useState(lastTheme);
    const currPage = window.location.href.split("/").pop();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(currPage);

    const loadingOnClick = async (load) => {
        load && setLoading(load);
        await setTimeout(() => setLoading(false), 300);
    };

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            setTimeout(() => preloader.remove(), 500);
        }
        const isLoading = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(isLoading);
    }, []);

    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className="items-center justify-center min-h-screen duration-900 ease-in-out transition-transform">
                {/* Lazy-loaded Navbar */}
                <Suspense
                    fallback={
                        <div className="w-full px-6 py-4 bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-between animate-pulse">
                            <div className="h-6 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="flex gap-4">
                                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                                <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            </div>
                        </div>
                    }
                >
                    <Navbar
                        theme={theme}
                        page={page}
                        setTheme={setTheme}
                        setPage={setPage}
                        loadingOnClick={loadingOnClick}
                    />
                </Suspense>

                {/* Lazy-loaded ScrollToTop */}
                <Suspense fallback={null}>
                    <ScrollToTop />
                </Suspense>
                <main className="flex flex-col md:p-12 lg:p-12 pb-20 font-display min-h-screen dark:bg-neutral-800 bg-neutral-200">
                    {loading ? <Skeleton type={page} /> : <Outlet />}
                </main>

                {/* Lazy-loaded Footer */}
                <Suspense
                    fallback={
                        <div className="w-full px-6 py-8 bg-white dark:bg-neutral-900 animate-pulse">
                            <div className="h-4 w-32 mb-3 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="h-4 w-48 mb-2 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                            <div className="h-4 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                        </div>
                    }
                >
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}
