import { useState, useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Skeleton from "./components/skeleton/Skeleton";
import SkeletonNavbar from "./components/skeleton/SkeletonNavbar";
import SkeletonFooter from "./components/skeleton/SkeletonFooter";

// Lazy-load layout components
const Navbar = lazy(() => import("./components/nav/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./ScrollToTop"));

export default function App() {
    // init first theme
    const lastTheme = localStorage.getItem("theme") === null ? true : false;

    const [page, setPage] = useState(currPage);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(lastTheme);
    const currPage = window.location.href.split("/").pop();

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
                <Suspense fallback={<SkeletonNavbar />}>
                    <Navbar
                        theme={theme}
                        page={page}
                        setTheme={setTheme}
                        setPage={setPage}
                        loadingOnClick={loadingOnClick}
                    />
                </Suspense>
                <Suspense fallback={null}>
                    <ScrollToTop />
                </Suspense>
                <main className="flex flex-col md:p-12 lg:p-12 pb-20 font-display min-h-screen dark:bg-neutral-800 bg-neutral-200">
                    {loading ? <Skeleton type={page} /> : <Outlet />}
                </main>
                <Suspense fallback={<SkeletonFooter />}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}
