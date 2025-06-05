import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Skeleton from "./components/skeleton/Skeleton";
import Footer from "./components/Footer";

export default function App() {
    // other params
    const lastTheme = localStorage.getItem("theme") === null ? true : false;
    const currPage = window.location.href.split("/").pop();

    // state goes here
    const [theme, setTheme] = useState(lastTheme);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(currPage);

    // functions goes here
    const loadingOnClick = async (load) => {
        load && setLoading(load);
        await setTimeout(() => setLoading(false), 250);
    };

    // hooks goes here
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
            <div className="items-center justify-center min-h-screen duration-900 ease-in-out transition-all">
                <Navbar
                    theme={theme}
                    page={page}
                    setTheme={setTheme}
                    setPage={setPage}
                    loadingOnClick={loadingOnClick}
                />
                <main className="flex flex-col md:p-12 lg:p-12 pb-20 font-display min-h-screen dark:bg-neutral-800 bg-neutral-200">
                    {loading ? (
                        <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col space-y-4">
                            <Skeleton className="w-[40%] max-w-3xl h-15" />
                            <Skeleton className="w-[90%] max-w-3xl h-3" />
                            <Skeleton className="w-[70%] max-w-3xl h-3" />
                            <Skeleton className="w-[80%] max-w-3xl h-3" />
                            <Skeleton className="w-[50%] max-w-3xl h-3" />
                            <Skeleton className="w-[85%] max-w-3xl h-3" />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
                <Footer />
            </div>
        </div>
    );
}
