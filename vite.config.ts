import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure SPA routing works in production
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // For development server
  server: {
    historyApiFallback: true,
  },
  // For production preview
  preview: {
    port: 4173,
    host: true,
  },
});
