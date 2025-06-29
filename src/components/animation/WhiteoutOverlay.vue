<!-- vue の雛形ファイル -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="absolute inset-0 bg-white z-30 opacity-100"></div>
  </transition>
</template>

<style scoped>
</style>