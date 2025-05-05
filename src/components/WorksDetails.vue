<!-- Worksページ・右側のcomponents -->
<script setup>
import { computed, ref } from 'vue'
import LaravelIntro from '@/components/works/LaravelIntro.vue'
import VueIntro from '@/components/works/VueIntro.vue'
import LaravelTech from '@/components/works/LaravelTech.vue'
import VueTech from '@/components/works/VueTech.vue'
import LaravelProcess from '@/components/works/LaravelProcess.vue'
import VueProcess from '@/components/works/VueProcess.vue'
import LaravelResult from '@/components/works/LaravelResult.vue'
import VueResult from '@/components/works/VueResult.vue'

// 親から渡される props、definePropsで受け取る
const props = defineProps({
    selectedCategory: {
        type: String,
        default: 'Laravel制作サイト' //デフォルト値を念のため設定
    },
    selectedCategoryLabel: {
        type: String
    },
    categories: {
        type: Array,
        required: true
    }
})

// デフォルトの「タブのカテゴリ」
const selectedTab = ref('intro')

console.log(selectedTab.value)

// propsの categories を元に tabs を組み立てる
const tabsMap = {
    laravelSite: {
        intro: LaravelIntro,
        tech: LaravelTech,
        process: LaravelProcess,
        result: LaravelResult
    },
    vuePortfolio: {
        intro: VueIntro,
        tech: VueTech,
        process: VueProcess,
        result: VueResult
    }
}

const currentTab = computed(() => {
    const category = props.selectedCategory
    const tab = selectedTab.value
    return tabsMap[category][tab]
})

console.log(props.categories)

// 元の category に contentMap の情報を加えた新しいオブジェクトを作成
// const tabs = props.categories.map(category =>{
//     return{
//         ...category,
//         content: contentMap[category.value]
//     }
// })

// console.log(currentTabs.value)
// console.log("selectedTab.value:", selectedTab.value)
// console.log("tabs:", tabs)

// console.log("比較結果：", tab.value === selectedTab.value)

</script>

<template>
    <div>
        <h2>{{ selectedCategoryLabel }}</h2>

        <!-- タブ切り替えボタン -->
        <button
            v-for = "tab in ['intro', 'tech', 'process', 'result']"
            :key="tab"
            @click="selectedTab = tab"
        >
        {{ tab }}
        </button>

        <!-- 選択されたカテゴリーとタブに応じたコンポーネント -->
        <component v-if="currentTab" :is="currentTab" />
    </div>
</template>