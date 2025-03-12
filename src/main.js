import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from './router'; // ルーターをインポート

// Vueアプリを作成して `app` に保存
const app = createApp(App);

// GPT先生と相談のうえ追加 25.3.9
// 開発環境でのみ Vue DevTools を有効にする（本番環境では無効）
if (import.meta.env.DEV === "development") {
  app.config.devtools = true;
}

app.use(router); // ルーターを使用

// Vueアプリを画面にマウント
app.mount("#app");
