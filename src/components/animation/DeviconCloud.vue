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
    class="absolute w-12 h-12 transition-all duration-1000 ease-in-out"
    :style="{
      left: `${icon.x}px`,
      top: `${icon.y}px`,
      opacity: icon.opacity,
      transform: `scale(${icon.scale})`,
      zIndex: step === 1 ? 20 : 5
    }"
  >
    <Icon :name="skillIcons[index]" class="w-full h-full" />
  </div>
</template>