<!--  Worksページ・右側components VueのApproachタブ中身-->
<script setup></script>

<template>
  <h3
    class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.2rem+0.27vw)] leading-[1.4] font-medium"
  >
    開発アプローチ
  </h3>
  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    1. 技術選定と理由
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>- フロントエンドへの関心とスキル習得を目的に、Vue 3 ＋ Viteを採用。</p>
    <p>
      - スタイリングは Tailwind CSS を導入し、デザインの統一と開発効率を向上。
    </p>
    <p>- コード品質向上のため、eslint / prettier による整形ルールを設定</p>
  </div>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    2. 設計・実装の工夫
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>
      - トップページでは ヒーローアニメーション
      を構成し、AI（Cursor）を活用して効率的に実装。
    </p>
    <p>
      -
      海外サイトを参考に左右分割レイアウトを採用し、ラフスケッチをもとに情報配置と視線誘導を調整。
    </p>
    <p>- ページ遷移は vue-router、メタ情報管理は VueUse/head を活用。</p>
    <p>
      - GitHub と Vercel を活用し、開発から本番公開までの CI/CD フローを導入。
    </p>
  </div>
</template>
