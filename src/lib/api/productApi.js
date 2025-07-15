import axios from "axios";

const ProductApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // baseURL: "https://api.escuelajs.co/api/v1",
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
                import.meta.env.VITE_API_BASE_URL + "/sanctum/csrf-cookie",
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
