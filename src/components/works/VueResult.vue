<!--  Worksページ・右側components VueのResultタブ中身-->
<script setup></script>

<template>
  <h3
    class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.2rem+0.27vw)] leading-[1.4] font-medium"
  >
    成果・振り返り
  </h3>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    成果
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>・コンポーネント設計を行い、再利用性を意識した構成を実装。</p>
    <p>・vueの入れ子構造を踏まえ、CSS の継承を考慮したスタイル設計を実施。</p>
    <p>・アニメーションや状態管理を用いて、動的な描画を実装。</p>
  </div>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    振り返り
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>
      コンポーネント単位の設計では構成の粒度が細かく、より「設計力」が問われることを学びました。
    </p>
    <p>
      Laravel のような同期的な処理と異なり、Vue
      では非同期処理や描画タイミングの理解が重要だと実感。
    </p>
    <p>
      アニメーションのデバッグでは、仮説を立てて検証を繰り返すことの大切さを体感し、課題解決力を鍛えられました。
    </p>
  </div>
</template>
