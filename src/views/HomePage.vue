<script setup>
//import BaseLayout from '@/layouts/BaseLayout.vue'
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

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
    <h1
      class="font-roboto text-nuance-brown text-[calc(1.6rem+0.35vw)] leading-[1.2] font-semibold"
    >
      Ayako Nakayama portfolio
    </h1>
  </div>
</template>
