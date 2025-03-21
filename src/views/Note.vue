<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
    title: 'Note | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: '記事紹介ページです。'},
        {property: 'og:title', content: 'Note | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/note'}
    ]
})
</script>

<template>
    <BaseLayout>
        <!-- 左エリアの内容 -->
        <template #left>
            <h1>Note</h1>
        </template>

        <!-- 左エリアの内容 -->
        <template #right>
        </template>
    </BaseLayout>
</template>