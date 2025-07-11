<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- 画面を白くフェードさせる -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="absolute inset-0 z-30 bg-white opacity-100"></div>
  </transition>
</template>

<style scoped></style>
