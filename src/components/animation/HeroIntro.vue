<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="absolute inset-0 flex items-center justify-center z-10">
      <h1 class="text-[calc(1.8rem+0.3vw)] font-ibm text-charcoal-gray text-center leading-[1.2] font-semibold">edit</h1>
    </div>
  </transition>
</template>