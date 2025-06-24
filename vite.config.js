import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [
        react({
            fastRefresh: false,
            jsxRuntime: "classic",
        }),
        tailwindcss(),
        compression(),
        viteCompression({
            algorithm: "brotliCompress",
            ext: ".br",
        }),
    ],
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname,
        },
    },
    build: {
        target: "esnext",
        minify: "esbuild",
        chunkSizeWarningLimit: 1000,
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                },
            },
        },
    },
});
