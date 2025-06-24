<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="absolute inset-0 flex items-center justify-center z-10">
      <h1 class="text-6xl font-bold text-gray-800">edit</h1>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 1s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>