<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import SkillsCategory from '@/components/SkillsCategory.vue'
import SkillsDetails from '@/components/SkillsDetails.vue'

useHead({
  title: 'Skills | Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: 'スキル紹介ページです。' },
    { property: 'og:title', content: 'Skills | Ayako Nakayama portfolio' },
    { property: 'og:url', content: 'https://your-portfolio.com/skills' },
  ],
})

// 初期状態はフロンドエンド・ 親で状態管理
const selectedCategory = ref('フロントエンド')
</script>

<template>
  <!-- 選択されたカテゴリーを表示 -->
  <h1
    class="font-ibm text-charcoal-gray mb-[clamp(2.44rem,2.44rem+0.35vw,3.05rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold break-words"
  >
    Skill・{{ selectedCategory }}
  </h1>
  <div class="h-screen flex min-h-0 w-full flex-1 flex-wrap">
    <!-- 左エリア（カテゴリー選択） -->
    <SkillsCategory
      class="flex-shrink-0 flex-grow basis-[30ch] overflow-visible"
      v-model:selected-category="selectedCategory"
    />

    <!-- 右エリア（スキル詳細） -->
    <SkillsDetails
      class="flex-shrink-0 flex-grow basis-[30ch] overflow-auto"
      :selected-category="selectedCategory"
    />
  </div>
</template>

<style scoped></style>
