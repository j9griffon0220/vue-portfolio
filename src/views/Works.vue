<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
    title: 'Works | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: '制作実績ページです。'},
        {property: 'og:title', content: 'Works | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/works'}
    ]
})
</script>

<template>
    <BaseLayout>
        <!-- 左エリアの内容 -->
        <template #left>
            <h1>Works</h1>
        </template>

        <!-- 左エリアの内容 -->
        <template #right>
        </template>
    </BaseLayout>
</template>