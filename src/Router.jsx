import App from "./App";
import NotFound from "./pages/NotFound";
import { lazy } from "react";
import { withLazyRoute } from "./utils/withLazyRoute";
import { createBrowserRouter } from "react-router-dom";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Demo = lazy(() => import("./pages/Demo"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./components/work/Gallery"));
const CrudIndex = lazy(() => import("./components/crud/index"));
const Experience = lazy(() => import("./pages/Experience"));
const ProductList = lazy(() => import("./components/product/ProductList"));
const ProductDetail = lazy(() => import("./components/product/ProductDetail"));

// Route config
const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: withLazyRoute(Home, "home", "home") },
            { path: "about", element: withLazyRoute(About, "about", "about") },
            { path: "work", element: withLazyRoute(Work, "work", "work") },
            { path: "demo", element: withLazyRoute(Demo, "demo", "demo") },
            {
                path: "demo/crud",
                element: withLazyRoute(CrudIndex, "crud", "crud"),
            },
            {
                path: "experience",
                element: withLazyRoute(Experience, "experience", "experience"),
            },
            {
                path: "demo/product",
                element: withLazyRoute(ProductList, "product", "product"),
            },
            {
                path: "demo/product/detail/:id",
                element: withLazyRoute(
                    ProductDetail,
                    "detail",
                    "product-detail",
                ),
            },
            {
                path: "work/gallery/:companyId/:appId",
                element: withLazyRoute(Gallery, "gallery", "gallery"),
            },
        ],
    },
];

const router = createBrowserRouter(routes, {
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    },
});

export default router;
