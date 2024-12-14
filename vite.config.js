import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills"; // Named import

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(), // Use the named export
  ],
  resolve: {
    alias: {
      path: "path-browserify", // Polyfill for the 'path' module
    },
  },
});
