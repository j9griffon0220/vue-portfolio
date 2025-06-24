<!-- vue の雛形ファイル -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="absolute inset-0 flex items-center justify-center z-40">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">My name portfolio</h1>
        <h2 class="text-2xl text-gray-600 animate-fade-in-delay">Ayako Nakayama portfolio</h2>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 1s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
