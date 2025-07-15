import axios from "axios";

const ProductApi = axios.create({
    baseURL: "https://api-product-i6yy.onrender.com", // baseURL: "https://api.escuelajs.co/api/v1",
    // baseURL: "http://localhost:8000",
    timeout: 20000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Flag to avoid calling csrf-cookie multiple times
let csrfInitialized = false;

// Interceptor: run before every request
ProductApi.interceptors.request.use(
    async (config) => {
        const method = config.method?.toLowerCase();
        const requiresCsrf = ["post", "put", "patch", "delete"].includes(
            method,
        );

        if (requiresCsrf && !csrfInitialized) {
            await axios.get(
                "https://api-product-i6yy.onrender.com/sanctum/csrf-cookie",
                // "http://localhost:8000/sanctum/csrf-cookie",
                {
                    withCredentials: true,
                },
            );
            csrfInitialized = true;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export default ProductApi;
