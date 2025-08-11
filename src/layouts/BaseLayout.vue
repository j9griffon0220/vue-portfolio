<script setup>
// 開発用のボックス確認用アウトラインを開発中のみ読み込み
if (import.meta.env.VITE_DEBUG === 'true') {
  import('@/assets/css/debug.css')
}
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { useRoute } from 'vue-router'
import ScrollToTop from '@/components/ScrollToTop.vue'

// 現在のルート情報を取得
const route = useRoute()
</script>

<template>
  <div class="bg-nuance-gray">
    <!-- 条件分岐：トップページ（Home.vue）の時だけブラウザの高さにヘッダーフッター含めピッタリ収める -->
    <div
      :class="[
        'mx-auto max-w-[90vw] pt-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] pb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)]',
        // route.path === '/' ? 'flex min-h-screen flex-col' : '',
        route.path === '/' ? 'flex h-screen flex-col' : '',
      ]"
    >
      <!-- 高さ指定なし -->
      <Header />

      <!-- メインコンテンツ（各ページのviewsファイルが入る） -->
      <!-- <main class="flex-1 overflow-hidden"> -->
      <main
        class="mb-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] flex-1 overflow-hidden"
      >
        <router-view />
      </main>
      <!-- 高さ指定なし -->
      <Footer />
      <ScrollToTop />
    </div>
  </div>
</template>

<style scoped></style>
