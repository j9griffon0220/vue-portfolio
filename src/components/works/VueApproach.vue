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
      - スタイリングにはTailwind
      CSSを採用。デザインの統一と開発効率の向上を意識しました。
    </p>
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
      -
      印象に残るトップページを目指し、AIと協働しながらヒーローアニメーションを構成。実装はコード生成AI「Cursor」を活用。
      AIとの協働により、効率と表現力の両立を目指しました。
    </p>
    <p>
      -
      海外サイトに着想を得て左右分割レイアウトを採用。ラフスケッチをもとに調整しながら実装を進め、UI設計への理解を深めました。
    </p>
    <p>
      - VueUse/head によるメタ情報管理や vue-router によるページ遷移、eslint /
      prettier によるコード整形ルールを導入。
    </p>
    <p>
      - 公開は GitHub を経由し、Vercel
      にデプロイ。開発から公開までの一連の流れを経験することで、スキル習得を図っています。
    </p>
  </div>
</template>
