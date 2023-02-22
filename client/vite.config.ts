/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    // setupFiles: ["/src/test/average.test.ts", "/src/test/top5.test.ts"],
    // setupFiles: ["src/setupTest.ts"],
  },
});
