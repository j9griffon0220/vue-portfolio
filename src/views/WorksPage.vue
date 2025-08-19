<script setup>
import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'
import WorksCategory from '@/components/WorksCategory.vue'
import WorksDetails from '@/components/WorksDetails.vue'

useHead({
  title: 'Works | Ayako Nakayama portfolio',
  meta: [
    { name: 'description', content: '制作実績ページです。' },
    // ogなし・SPAのためSNSではトップページのみ反映
  ],
})

// 親で categories 配列を定義し、状態管理
const categories = [
  { label: 'Laravel制作サイト', value: 'laravelSite' },
  { label: 'Vueポートフォリオ', value: 'vuePortfolio' },
]

// 初期状態はlaravel制作サイト・ 親で状態管理
const selectedCategory = ref('laravelSite')

// selectedCategoryを対応するlabelで表示させるためにcomputed(）を使用
const selectedCategoryLabel = computed(() => {
  const found = categories.find((cat) => cat.value === selectedCategory.value)
  return found ? found.label : ''
})
</script>

<template>
  <div>
    <!-- 選択されたカテゴリーを表示 -->
    <h1
      class="font-ibm text-charcoal-gray after:bg-charcoal-gray/30 relative mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-medium break-words after:absolute after:right-0 after:bottom-0 after:bottom-[-1.5rem] after:left-0 after:mx-auto after:h-0.5 after:w-full after:content-['']"
    >
      Works・{{ selectedCategoryLabel }}
    </h1>

    <div class="@container/main flex min-h-0 w-full flex-wrap">
      <!-- 左エリア（カテゴリー選択） -->
      <WorksCategory
        class="min-h-0 flex-1 flex-shrink-0 flex-grow basis-[30ch]"
        :categories="categories"
        :selected-category="selectedCategory"
        @update:selected-category="selectedCategory = $event"
      />

      <!-- 右エリア（スキル詳細） -->
      <!-- @2xl/main:max-h-[calc(100vh-11.7rem)]でヘッダー＋タイトルの高さを引く -->
      <WorksDetails
        class="min-h-0 flex-1 flex-shrink-0 flex-grow basis-[30ch] @2xl/main:max-h-[calc(100vh-11.7rem)] @2xl/main:overflow-y-auto"
        :selected-category="selectedCategory"
        :selected-category-label="selectedCategoryLabel"
        :categories="categories"
      />
    </div>
  </div>
</template>
