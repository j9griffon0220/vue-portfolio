<script setup>
//import BaseLayout from '@/layouts/BaseLayout.vue'
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
    title: 'Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: 'ポートフォリオトップページです。'},
        {property: 'og:title', content: 'Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com'}
    ]
})
</script>

<template>
    <div>
        <h1 class="">Ayako Nakayama portfolio</h1>
    </div>
</template>