<script setup>
//import BaseLayout from '@/layouts/BaseLayout.vue'
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import HeroAnimation from '@/components/animation/HeroAnimation.vue'

useHead({
  title: 'Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: 'ポートフォリオトップページです。' },
    { property: 'og:title', content: 'Ayako Nakayama portfolio' },
    { property: 'og:url', content: 'https://your-portfolio.com' },
  ],
})
</script>

<template>
  <div>
    <HeroAnimation />
  </div>
</template>
