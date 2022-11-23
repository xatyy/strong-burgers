import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
//
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.strongburgers.ro",
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.cjs",
      },
    }),
    react(),
    sitemap(),
  ],
});
