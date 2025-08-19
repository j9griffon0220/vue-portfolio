<!-- 404ページファイル -->
<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '404 Not Found | Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: 'お探しのページは見つかりませんでした。' },
    // ogなし・SPAのためSNSではトップページのみ反映
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <h1
      class="font-ibm text-charcoal-gray after:bg-charcoal-gray/30 relative mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-medium break-words after:absolute after:right-0 after:bottom-0 after:bottom-[-1.5rem] after:left-0 after:mx-auto after:h-0.5 after:w-full after:content-['']"
    >
      ページが見つかりません
    </h1>
    <p
      class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-center text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal"
    >
      URLが間違っているか、コンテンツが存在しない可能性があります。
    </p>
    <router-link
      to="/"
      class="font-ibm text-charcoal-gray/60 hover:bg-charcoal-gray/5 mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] ml-auto block w-fit px-4 py-2 text-right text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out"
    >
      トップへもどる
    </router-link>
  </div>
</template>

<!-- 必要ならスタイル -->
<style scoped></style>
