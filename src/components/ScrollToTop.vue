<!-- 上に戻るボタンパーツ -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

// 将来の変更・安全性のために念のため記述
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="font-ibm text-nuance-gray bg-charcoal-gray/60 hover:bg-charcoal-gray/5 hover:text-charcoal-gray/60 fixed right-[5vw] [bottom:calc(1rem+env(safe-area-inset-bottom))] block w-fit px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out"
    aria-label="上にもどる"
  >
    ↑
  </button>
</template>

<!-- 必要ならスタイル -->
<style scoped></style>
