import Navbar from "./components/nav/Navbar";
import Skeleton from "./components/skeleton/Skeleton";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

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
                <Navbar
                    theme={theme}
                    page={page}
                    setTheme={setTheme}
                    setPage={setPage}
                    loadingOnClick={loadingOnClick}
                />
                <ScrollToTop />
                <main className="flex flex-col md:p-12 lg:p-12 pb-20 font-display min-h-screen dark:bg-neutral-800 bg-neutral-200">
                    {loading ? <Skeleton type={page} /> : <Outlet />}
                </main>
                <Footer />
            </div>
        </div>
    );
}
