import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Demo from "./pages/demo/Demo";
import ProductList from "./components/product/ProductList";
import ProductDetail from "./components/product/ProductDetail";
import CrudIndex from "./components/crud/index";
import NotFound from "./pages/NotFound";
import Gallery from "./components/work/Gallery";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "work", element: <Work /> },
            { path: "experience", element: <Experience /> },
            { path: "demo", element: <Demo /> },
            { path: "demo/product", element: <ProductList /> },
            { path: "demo/crud", element: <CrudIndex /> },
            { path: "demo/product/detail/:id", element: <ProductDetail /> },
            { path: "work/gallery/:companyId/:appId", element: <Gallery /> },
        ],
    },
];

const router = createBrowserRouter(routes, {
    future: {
        v7_startTransition: true, // Disable v7_startTransition for compatibility
        v7_relativeSplatPath: true, // Disable v7_relativeSplatPath for compatibility
    },
});

export default router;
