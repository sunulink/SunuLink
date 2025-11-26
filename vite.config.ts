import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // important pour que toutes les routes fonctionnent en production
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger supprimé car non défini
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // Vercel attend le dossier "dist" par défaut
  },
}));
