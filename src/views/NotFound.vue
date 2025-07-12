<!-- 404ページファイル -->
<script setup>
// importや状態の定義
</script>

<template>
  <h1
    class="font-ibm text-charcoal-gray mb-[clamp(2.44rem,2.44rem+0.35vw,3.05rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold break-words"
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
    トップへ戻る
  </router-link>
</template>

<!-- 必要ならスタイル -->
<style scoped></style>
