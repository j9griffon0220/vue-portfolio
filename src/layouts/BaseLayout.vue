<script setup>
// 開発用のボックス確認用アウトラインを開発中のみ読み込み
if (import.meta.env.VITE_DEBUG === 'true') {
  import('@/assets/css/debug.css')
}
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="bg-nuance-gray">
    <div class="mx-auto max-w-[90vw]">
      <Header />

      <!-- メインコンテンツ（各ページのviewsファイルが入る） -->
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
