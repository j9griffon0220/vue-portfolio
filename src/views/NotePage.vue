<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Note | Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: '記事紹介ページです。' },
    { property: 'og:title', content: 'Note | Ayako Nakayama portfolio' },
    { property: 'og:description', content: '記事紹介ページです。' },
    { property: 'og:url', content: 'https://your-portfolio.com/note' },
  ],
})
</script>

<!-- 「左右並びのときだけ右側をスクロール可能にしたい」ことを確認するためのコード -->
<template>
  <div class="h-screen">
    <h1
      class="font-ibm text-charcoal-gray after:bg-charcoal-gray/30 relative mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-medium break-words after:absolute after:right-0 after:bottom-0 after:bottom-[-1.5rem] after:left-0 after:mx-auto after:h-0.5 after:w-full after:content-['']"
    >
      Sample・Title
    </h1>

    <div class="flex min-h-0 w-full flex-1 basis-[30ch] flex-wrap bg-gray-200">
      <!-- 左エリアの内容 -->
      <p class="flex-shrink-0 flex-grow basis-[30ch]">
        左○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
      </p>
      <!-- 右エリアの内容 -->
      <div
        class="h-[200px] flex-shrink-0 flex-grow basis-[30ch] overflow-auto bg-gray-100"
      >
        <!-- 長いコンテンツ -->
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
    </div>
  </div>
</template>
