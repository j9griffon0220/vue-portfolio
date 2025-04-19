<!-- Worksページ・右側のcomponents -->
<script setup>
import { ref } from 'vue'

// 親から渡される props、definePropsで受け取る
const props = defineProps({
    selectedCategory: {
        type: String,
        default: 'Laravel制作サイト', //デフォルト値を念のため設定
    },
    selectedCategoryLabel: {
        type: String,
    }
})

const tabs = [
    { label: 'Intro', value: 'intro' },
    { label: 'Tech', value: 'tech' },
    { label: 'Process', value: 'process' },
    { label: 'Result', value: 'result' }
]
// デフォルトのタブを指定
const selectedTab = ref('intro')

</script>

<template>
    <div>
        <h2>{{ selectedCategoryLabel }}</h2>

        <!-- タブボタン -->
        <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="selectedTab = tab.value"
        :class="{ active: selectedTab === tab.value }"
        >
        {{ tab.label }}
        </button>

        <!-- タブの内容・カテゴリーによって各タブ切り替え -->
        <div v-if="props.selectedCategory === 'laravelSite'">
            <div v-show="selectedTab === 'intro'">LaravelのIntroの内容</div>
            <div v-show="selectedTab === 'tech'">LaravelのTechの内容</div>
            <div v-show="selectedTab === 'process'">LaravelのProcessの内容</div>
            <div v-show="selectedTab === 'result'">LaravelのResultの内容</div>
        </div>
        <div v-if="props.selectedCategory === 'vuePortfolio'">
            <div v-show="selectedTab === 'intro'">VueポートフォリオのIntroの内容</div>
            <div v-show="selectedTab === 'tech'">VueポートフォリオのTechの内容</div>
            <div v-show="selectedTab === 'process'">VueポートフォリオのProcessの内容</div>
            <div v-show="selectedTab === 'result'">VueポートフォリオのResultの内容</div>
        </div>
    </div>
</template>