

import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: "",
    base: "",
    build: {
      rollupOptions: {
        input: {
          landing: resolve(__dirname, "./index.html")
        },
      },
      emptyOutDir: true,
    },
    plugins: [react()]
});