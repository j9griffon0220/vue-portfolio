<!--  Worksページ・右側components VueのIntroタブ中身-->
<script setup></script>

<template>
  <!-- <h3
    class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.27rem+0.27vw)] leading-[1.4] font-medium"
  >
    Vueポートフォリオ概要
  </h3> -->

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(0.8rem,0.8rem+0.15vw,1rem)] px-4 py-2 text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out"
  >
    「Ayako Nakayama portfolio」
  </h4>
  <p
    class="font-ibm text-soft-gray text-calc(0.9rem+0.25vw) mb-[clamp(1rem,1rem+0vw,1rem)] text-center font-light"
  >
    ※ご覧いただいているサイトのトップページです。
  </p>

  <!-- スクリーンショット画像 imgタグ -->
  <div
    class="border-charcoal-gray/20 hover:border-charcoal-gray/40 mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] aspect-[16/9] h-auto w-full border-[.1rem] shadow-md transition duration-200"
  >
    <img
      class="object-cover"
      src="/vue-pf@1x.webp"
      srcset="/vue-pf@1x.webp 1x, /vue-pf@2x.webp 2x"
      alt="サイトスクリーンショット"
    />
  </div>

  <div
    class="font-ibm text-soft-gray space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>ポートフォリオサイトを、Vue 3 + Vite + Tailwind CSS で構築しました。</p>
  </div>
</template>
