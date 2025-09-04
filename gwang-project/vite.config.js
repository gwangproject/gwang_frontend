import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      // 프론트에서 '/api'로 들어오는 건 모두 백엔드로
      '/api': {
        target: 'http://gwang.store', // 또는 https://gwang.store
        changeOrigin: true,
        // 백엔드가 /api 없이 동작한다면 주석 해제
        // rewrite: path => path.replace(/^\/api/, ''),
        // target이 self-signed https라면
        // secure: false,
      }
    }
  },
});
