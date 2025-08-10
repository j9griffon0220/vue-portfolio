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
    { property: 'og:description', content: 'スキル紹介ページです。' },
    // og:urlまだ
    { property: 'og:url', content: 'https://000000/skills' },
  ],
})

// 初期状態はフロンドエンド・ 親で状態管理
const selectedCategory = ref('フロントエンド')
</script>

<template>
  <div class="min-h-screen">
    <!-- 選択されたカテゴリーを表示 -->
    <h1
      class="font-ibm text-charcoal-gray after:bg-charcoal-gray/30 relative mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-medium break-words after:absolute after:right-0 after:bottom-0 after:bottom-[-1.5rem] after:left-0 after:mx-auto after:h-0.5 after:w-full after:content-['']"
    >
      Skill・{{ selectedCategory }}
    </h1>
    <div class="flex h-screen min-h-0 w-full flex-1 flex-wrap">
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
  </div>
</template>

<style scoped></style>
