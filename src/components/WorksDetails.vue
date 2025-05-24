<!-- Worksページ・右側のcomponents -->
<script setup>
import { computed, ref } from 'vue'
import LaravelIntro from '@/components/works/LaravelIntro.vue'
import VueIntro from '@/components/works/VueIntro.vue'
import LaravelApproach from '@/components/works/LaravelApproach.vue'
import VueApproach from '@/components/works/VueApproach.vue'
import LaravelResult from '@/components/works/LaravelResult.vue'
import VueResult from '@/components/works/VueResult.vue'

// 親から渡される props、definePropsで受け取る
const props = defineProps({
  selectedCategory: {
    type: String,
    default: 'Laravel制作サイト', //デフォルト値を念のため設定
  },
  selectedCategoryLabel: {
    type: String,
  },
  categories: {
    type: Array,
    required: true,
  },
})

// デフォルトの「タブのカテゴリ」
const selectedTab = ref('intro')

console.log(selectedTab.value)

// propsの categories を元に tabs を組み立てる
const tabsMap = {
  laravelSite: {
    intro: LaravelIntro,
    approach: LaravelApproach,
    result: LaravelResult,
  },
  vuePortfolio: {
    intro: VueIntro,
    approach: VueApproach,
    result: VueResult,
  },
}

const currentTab = computed(() => {
  const category = props.selectedCategory
  const tab = selectedTab.value
  return tabsMap[category][tab]
})

console.log(props.categories)

// console.log(currentTabs.value)
// console.log("selectedTab.value:", selectedTab.value)
// console.log("tabs:", tabs)

// console.log("比較結果：", tab.value === selectedTab.value)
</script>

<template>
  <div>
    <h2
      class="font-ibm text-charcoal-gray text-[calc(1.4rem+0.3vw)] leading-[1.3] font-medium"
    >
      {{ selectedCategoryLabel }}
    </h2>

    <!-- タブ切り替えボタン -->
    <button
      v-for="tab in ['intro', 'approach', 'result']"
      :key="tab"
      @click="selectedTab = tab"
      class="font-ibm text-charcoal-gray text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal"
    >
      {{ tab }}
    </button>

    <!-- 選択されたカテゴリーとタブに応じたコンポーネント -->
    <component v-if="currentTab" :is="currentTab" />
  </div>
</template>
