<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
    title: 'Skills | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: 'スキル紹介ページです。'},
        {property: 'og:title', content: 'Skills | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/skills'}
    ]
})
</script>

<template>
    <BaseLayout>
        <!-- 左エリアの内容 -->
        <template #left>
            <h1>Skills</h1>
        </template>

        <!-- 左エリアの内容 -->
        <template #right>
        </template>
    </BaseLayout>
</template>