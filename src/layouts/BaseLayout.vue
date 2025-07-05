<script setup>
// 開発用のボックス確認用アウトラインを開発中のみ読み込み
if (import.meta.env.VITE_DEBUG === 'true') {
  import('@/assets/css/debug.css')
}
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="bg-gradient-test min-h-screen">
    <div
      class="mx-auto max-w-[90vw] pt-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)]"
    >
      <!-- 高さ指定なし -->
      <Header />

      <!-- メインコンテンツ（各ページのviewsファイルが入る） -->
      <main class="mx-auto max-w-[85vw] flex-1 overflow-hidden">
        <router-view />
      </main>
      <!-- 高さ指定なし -->
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
