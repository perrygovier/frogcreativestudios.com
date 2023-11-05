import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { partytownVite } from "@builder.io/partytown/utils";
// import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import { join } from "path";

export default defineConfig(() => {
  return {
    plugins: [
      // cloudflarePagesAdapter({
      //   ssg: {
      //     include: ['/*'],
      //     origin: 'https://frogcreativestudios.com',
      //     outDir: join(__dirname, "dist", "ssg"),
      //   },
      // }),
      builderDevTools(),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
    ],
  };
});

