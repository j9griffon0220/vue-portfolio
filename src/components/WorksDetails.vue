<!-- Worksページ・右側のcomponents -->
<script setup>
// 親から渡される props、definePropsで受け取る
const props = defineProps({
    selectedCategory: {
        type: String,
        default: 'Laravel制作サイト', //デフォルト値を念のため設定
    },
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
        <h2>{{ props.selectedCategory }}</h2>

        <!-- タブボタン -->
        <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="selectedTab.value = tab.value"
        :class="{ active: selectedTab.value === tab.value }"
        >
        {{ tab.label }}
        </button>

        <!-- タブの内容 -->
        <div v-show="selectedTab.value === 'intro'">Introの内容</div>
        <div v-show="selectedTab.value === 'tech'">Techの内容</div>
        <div v-show="selectedTab.value === 'process'">Processの内容</div>
        <div v-show="selectedTab.value === 'result'">Resultの内容</div>
    </div>
</template>