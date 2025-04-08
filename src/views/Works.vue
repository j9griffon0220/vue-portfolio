<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import WorksCategory from '@/components/WorksCategory.vue'
import WorksDetails from '@/components/WorksDetails.vue'

useHead({
    title: 'Works | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: '制作実績ページです。'},
        {property: 'og:title', content: 'Works | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/works'}
    ]
})

// 初期状態はlaravel制作サイト・ 親で状態管理
const selectedCategory = ref('Laravel制作サイト')
</script>

<template>
    <!-- 選択されたカテゴリーを表示 -->
    <h1>Works・{{ selectedCategory }}</h1>
    <!-- 左エリア（カテゴリー選択） -->
    <WorksCategory />

    <!-- 右エリア（スキル詳細） -->
    <WorksDetails />
</template>