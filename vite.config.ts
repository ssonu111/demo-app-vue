import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // this sets up a convenient shortcut for imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // this configures the integrated testing framework (vitest)
  test: {
    globals: true, // makes test apis (describe, it, expect) available globally
    environment: "jsdom", // simulates a browser environment for testing
    // you could add a setup file here if needed:
    // setupFiles: './src/tests/setup.ts',
  },
});
