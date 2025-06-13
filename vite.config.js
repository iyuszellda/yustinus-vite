import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";

export default defineConfig({
    plugins: [
        react(),
        imagetools(),
        tailwindcss(),
        viteCompression({
            algorithm: "brotliCompress", // or 'gzip'
            ext: ".br", // '.gz' for gzip
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
