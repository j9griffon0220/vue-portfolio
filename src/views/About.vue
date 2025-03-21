<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
    title: 'About | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: '自己紹介ページです。'},
        {property: 'og:title', content: 'About | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/about'}
    ]
})
</script>

<template>
    <BaseLayout>
        <!-- 左エリアの内容 -->
        <template #left>
            <h1>About</h1>
        </template>

        <!-- 左エリアの内容 -->
        <template #right>
        </template>
    </BaseLayout>
</template>