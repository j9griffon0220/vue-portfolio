import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// TailwindのViteプラグインをインポート
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(), // ← vite-svg-loaderを追加
    tailwindcss(), // ← Tailwindのプラグインを追加
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
