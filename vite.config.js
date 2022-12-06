import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

const htmlOptions = {
  injectOptions: {
    data: {
      title: "title",
      injectScript: `<title>test</title>`,
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createHtmlPlugin(htmlOptions)],
});
