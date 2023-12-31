import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/blogs": {
        target: "http://localhost:3000",
      },
    },
  },
});
