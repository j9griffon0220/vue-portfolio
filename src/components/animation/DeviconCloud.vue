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
    class="absolute w-12 h-12 transition-all duration-1000 ease-in-out flex items-center justify-center"
    :style="{
      left: `${icon.x}px`,
      top: `${icon.y}px`,
      opacity: icon.opacity,
      transform: `scale(${icon.scale})`,
      zIndex: step === 1 ? 20 : 5
    }"
  >
    <Icon :name="skillIcons[index]" class="w-full h-full text-white" />
  </div>
</template>

<style scoped>
/* アイコンの背景やボーダーを完全に削除 */
:deep(svg) {
  background: transparent !important;
  border: none !important;
  outline: none !important;
}
</style>