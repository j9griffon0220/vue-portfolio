# Ayako Nakayama portfolio – Vue 3 × Vite × TailwindCSS
[**デモサイトを見る**](https://vue-portfolio-nine-plum.vercel.app/)

## 概要 （Description）
このプロジェクトは、転職活動用に制作した、中山綾子のポートフォリオサイトです。
フロントエンド（Vue.js 3 / Vite / TailwindCSS）を中心に、SPA の設計・実装を行いました。

## 特徴 （Features）
- トップページにてヒーローアニメーションを実装（Skip機能あり）
- Skillsページにて、これまで使用してきたスキルを紹介
- Worksページにて、これまでの制作物を紹介
- TailwindCSS を活用し、メディアクエリを極力使わず保守性と柔軟性の高いレスポンシブ対応
- 左右2分割レイアウトページでは、コンテナクエリを活用し、PC 時は右側のみスクロール可能に設計
- vue-router によるページ遷移とルーティング管理

## 使用技術 （Tech Stack）
- Vue.js 3（コンポーネントベースの SPA 開発）
- Vite（ビルド高速化・モジュールバンドラ）
- TailwindCSS 4（ユーティリティファーストCSS）
- vue-router（SPA のページ遷移管理）
- @vueuse/head（ページタイトル・OGP 設定）
- ESLint（コード品質のチェック）
- Prettier（自動でコード整形、可読性と保守性を向上）

## 開発サーバー起動 （Dev）
ローカルで開発を始めるには、以下のコマンドを実行：
npm install
npm run dev
ブラウザで http://localhost:5173/ を開く

## 制限事項 （Limitations）
静的SPAとして設計しているため、お問い合わせフォームはありません。
OGP はトップページのみ対応しています。

## ビルド方法 （Build）
以下のコマンドで本番用ビルドを`dist` フォルダに作成できます：
npm run build

## 今後検討したいこと（Future Considerations）
- ヒーローアニメーション内のアイコン表示のランダム配置や視覚バランスをさらに調整予定
- 必要に応じて Vercel の独自ドメイン導入を検討
- 本ポートフォリオサイトでの学習・経験を活かし、Nuxt.js の学習に取り組む予定
- 全ページでの OGP 適用のため、SSR対応（Nuxt.jsやVite SSR）も検討

##  クレジット / ライセンス（任意）
© Ayako Nakayama 2025 All rights reserved.
このプロジェクトはMITライセンスのもとで公開されています。

