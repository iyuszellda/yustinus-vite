import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteCompression({
            algorithm: "brotliCompress", // or 'gzip'
            ext: ".br", // '.gz' for gzip
        }),
    ],
    build: {
        target: "esnext",
        minify: "esbuild",
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
