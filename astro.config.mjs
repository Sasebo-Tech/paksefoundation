import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // ...
  site: "https://paksefoundation.org",
  integrations: [tailwind(), svelte(), sitemap(), partytown(), react(), robotsTxt()],
  output: "server",
  adapter: vercel()
});