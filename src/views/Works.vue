<script setup>
import { computed, ref } from 'vue'
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

// 親で categories 配列を定義し、状態管理
const categories = [
    { label: 'Laravel制作サイト', value: 'laravelSite' },
    { label: 'Vueポートフォリオ', value: 'vuePortfolio' }
]

// 初期状態はlaravel制作サイト・ 親で状態管理
const selectedCategory = ref('laravelSite')

// selectedCategoryを対応するlabelで表示させるためにcomputed(）を使用
const selectedCategoryLabel = computed(() => {
    const found = categories.find(cat => cat.value === selectedCategory.value)
    return found ? found.label : ''
})

</script>

<template>
    <!-- 選択されたカテゴリーを表示 -->
    <h1>Works・{{ selectedCategoryLabel }}</h1>
    <!-- 左エリア（カテゴリー選択） -->
    <WorksCategory :categories="categories"
    :selected-category="selectedCategory"
    @update:selected-category="selectedCategory = $event"
    />

    <!-- 右エリア（スキル詳細） -->
    <WorksDetails :selected-category="selectedCategory"
    :selected-category-label="selectedCategoryLabel"
    />
</template>