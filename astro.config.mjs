// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://brayan-cordova.vercel.app",
  trailingSlash: "always",
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    checkOrigin: false,
  },
  build: {
    inlineStylesheets: "always",
  },
});
