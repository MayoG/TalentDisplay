import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages project site: https://<user>.github.io/TalentDisplay/ */
const GITHUB_PAGES_BASE = "/TalentDisplay/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? GITHUB_PAGES_BASE : "/",
  plugins: [react()],
}));
