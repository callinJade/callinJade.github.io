import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/research" },
        { path: "/projects" },
        { path: "/design" },
        { path: "/resume" },
      ],
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
    }),
    react(),
  ],
  build: {
    cssMinify: "esbuild",
  },
});