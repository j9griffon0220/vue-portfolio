// Vueアプリケーションのエントリーポイント

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "@/style.css";
import App from "@/App.vue";
import router from '@/router'; // ルーターをインポート

// Vueアプリを作成して `app` に保存
const app = createApp(App);
const head = createHead()

// GPT先生と相談のうえ追加 25.3.9
// 開発環境でのみ Vue DevTools を有効にする（本番環境では無効）
if (import.meta.env.DEV === "development") {
  app.config.devtools = true;
}

app.use(router); // ルーターを使用

app.use(head) // vueアプリにheadを追加

// Vueアプリを画面にマウント
app.mount("#app");
