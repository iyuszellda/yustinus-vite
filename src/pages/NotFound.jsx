import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => preloader.remove(), 10);
    }
    const goBack = () => {
        navigate(-1);
        window.scrollTo(0, 0);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
            <h1 className="text-6xl font-bold text-neutral-800">404</h1>
            <p className="text-xl text-neutral-600 mt-4">Page Not Found</p>
            <p className="py-4 px-4 text-center text-lg text-neutral-500 mt-2">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                aria-label="page not found"
                onClick={goBack}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
                Go Back
            </button>
        </div>
    );
}
