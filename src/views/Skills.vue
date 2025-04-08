<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import SkillsCategory from '@/components/SkillsCategory.vue'
import SkillsDetails from '@/components/SkillsDetails.vue'

useHead({
    title: 'Skills | Ayako Nakayama portfolio',
    meta: [
        {name: 'description', content: 'スキル紹介ページです。'},
        {property: 'og:title', content: 'Skills | Ayako Nakayama portfolio'},
        {property: 'og:url', content: 'https://your-portfolio.com/skills'}
    ]
})

// 初期状態はフロンドエンド・ 親で状態管理
const selectedCategory = ref('フロントエンド')
</script>

<template>
    <!-- 選択されたカテゴリーを表示 -->
    <h1>Skill・{{ selectedCategory }}</h1>
    <!-- 左エリア（カテゴリー選択） -->
    <SkillsCategory v-model:selected-category="selectedCategory" />

    <!-- 右エリア（スキル詳細） -->
    <SkillsDetails :selected-category="selectedCategory" />
</template>

<style scoped></style>