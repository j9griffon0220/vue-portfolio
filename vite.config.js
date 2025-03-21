import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// TailwindのViteプラグインをインポート
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // ← Tailwindのプラグインを追加
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
