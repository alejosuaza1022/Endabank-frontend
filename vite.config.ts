import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ReactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  plugins: [react(), ReactRefresh()],
});
