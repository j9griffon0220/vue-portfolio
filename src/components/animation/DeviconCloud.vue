<script setup>
import Icon from '@/components/Icon.vue'
defineProps({
  icons: Array,
  skillIcons: Array,
  step: Number
})
</script>

<template>
  <div v-for="(icon, index) in icons" :key="index"
    class="absolute transition-all duration-1000 ease-in-out flex items-center justify-center"
    :style="{
      left: `${icon.x}px`,
      top: `${icon.y}px`,
      opacity: icon.opacity,
      transform: `translate(-50%, -50%) scale(${icon.scale})`,
      zIndex: step === 1 ? 20 : 5,
      width: 'calc(1.8rem + 0.3vw)',
      height: 'calc(1.8rem + 0.3vw)'
    }"
  >
    <Icon :name="skillIcons[index]" class="w-full h-full text-accent-gray" />
  </div>
</template>

<style scoped>
</style>