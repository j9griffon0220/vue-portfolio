<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- アイコンをランダムに表示して中央に集める -->
<script setup>
import Icon from '@/components/Icon.vue'
defineProps({
  icons: Array,
  skillIcons: Array,
  step: Number,
})
</script>

<!-- アイコンサイズはSkillsDetailsの時と同じサイズ感 -->
<template>
  <div class="relative h-full">
    <div
      v-for="(icon, index) in icons"
      :key="index"
      class="absolute flex items-center justify-center transition-all duration-1000 ease-in-out"
      :style="{
        left: `${icon.x}px`,
        top: `${icon.y}px`,
        opacity: icon.opacity,
        transform: `translate(-50%, -50%) scale(${icon.scale})`,
        zIndex: step === 1 ? 20 : 5,
        width: 'calc(1.8rem + 0.3vw)',
        height: 'calc(1.8rem + 0.3vw)',
      }"
    >
      <Icon :name="skillIcons[index]" class="text-smoky-aqua h-full w-full" />
    </div>
  </div>
</template>

<style scoped></style>
