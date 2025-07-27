import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// TailwindのViteプラグインをインポート
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// 25.7.26 Google Fonts対策に Vite Plugin Webfont DL を追加
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(), // ← vite-svg-loaderを追加
    tailwindcss(), // ← Tailwindのプラグインを追加
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@300;400;500;600&family=Roboto+Mono:ital@1&display=swap',
      ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
