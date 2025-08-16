<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'About | Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: '自己紹介ページです。' },
    { property: 'og:title', content: 'About | Ayako Nakayama portfolio' },
    { property: 'og:description', content: '自己紹介ページです。' },
    // og:urlまだ
    { property: 'og:url', content: 'https://00000/about' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <!-- aboutページについては左右２分割でいくのかどうするのか含め検討中 -->
    <!-- 左エリアの内容 -->
    <h1
      class="font-ibm text-charcoal-gray after:bg-charcoal-gray/30 relative mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-medium break-words after:absolute after:right-0 after:bottom-0 after:bottom-[-1.5rem] after:left-0 after:mx-auto after:h-0.5 after:w-full after:content-['']"
    >
      About
    </h1>
    <h2
      class="font-ibm text-charcoal-gray mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(1.51rem+0.29vw)] leading-[1.3] font-medium"
    >
      自己紹介
    </h2>
    <h3
      class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.2rem+0.27vw)] leading-[1.4] font-medium"
    >
      スキルと学びの履歴
    </h3>
    <div
      class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
    >
      <p>
        サーティファイ主催「Webクリエイター能力認定試験」合格（2021年）
        <br />- マークアップの基本やWeb標準の理解を深めるために受験
      </p>
      <p>
        宣伝会議主催「編集・ライター養成講座」24期修了（2012年） <br />-
        現職・エディターの仕事をしていく上で必要と考え受講
      </p>
      <p>※現在、Aboutページの記述を調整中です。随時更新予定です。</p>
    </div>
  </div>
  <!-- 左エリアの内容 -->
</template>
