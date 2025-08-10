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
      class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.51rem+0.29vw)] leading-[1.3] font-medium"
    >
      {{ selectedCategoryLabel }}
    </h2>

    <!-- タブコンテナ -->
    <div class="flex flex-col">
      <!-- タブヘッダー -->
      <div
        class="border-charcoal-gray/20 mb-[clamp(1.5rem,1.5rem+1vw,2.5rem)] flex border-b"
      >
        <button
          v-for="tab in ['intro', 'approach', 'result']"
          :key="tab"
          @click="selectedTab = tab"
          :class="[
            'font-ibm relative px-[clamp(1rem,1rem+1vw,2rem)] py-[clamp(0.64rem,0.64rem+0.12vw,0.8rem)] text-[calc(0.9rem+0.25vw)] font-medium transition-colors duration-200',
            selectedTab === tab
              ? 'text-charcoal-gray after:bg-charcoal-gray after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5'
              : 'text-charcoal-gray/60 hover:text-charcoal-gray/80 hover:bg-charcoal-gray/5',
          ]"
          :aria-selected="selectedTab === tab"
          :aria-controls="`tabpanel-${tab}`"
          role="tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- タブコンテンツ -->
      <!-- class="pt-[clamp(1rem,1rem+0.5vw,1.5rem)] pb-[clamp(1rem,1rem+0.5vw,1.5rem)]" -->
      <div class="pb-[clamp(1rem,1rem+0.5vw,1.5rem)]">
        <component v-if="currentTab" :is="currentTab" />
      </div>
    </div>
  </div>
</template>
