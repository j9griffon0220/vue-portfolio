<!-- Worksページ・右側のcomponents -->
<script setup>
import { ref } from 'vue'
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
        default: 'Laravel制作サイト', //デフォルト値を念のため設定
    },
    selectedCategoryLabel: {
        type: String,
    }
})

// v-forで扱いやすいように「配列＋オブジェクト」のデータ構造に。
// key（タブ名）とvalue（中身）もとる
const tabs = [
{
    label: 'Laravel制作サイト',
    value: 'laravelSite',
    content: {
        intro: LaravelIntro,
        tech: LaravelTech,
        process: LaravelProcess,
        result: LaravelResult
    }
},
{
    label: 'Vueポートフォリオ',
    value: 'vuePortfolio',
    content: {
        intro: VueIntro,
        tech: VueTech,
        process: VueProcess,
        result: VueResult
    }
}
]

// const tabs = {
//     laravelSite: {
//         intro: LaravelIntro,
//         tech: LaravelTech,
//         process: LaravelProcess,
//         result: LaravelResult
//     },
//     vuePortfolio: {
//         intro: VueIntro,
//         tech: VueTech,
//         process: VueProcess,
//         result: VueResult
//     }
// }

// デフォルトのタブを指定
const selectedTab = ref('intro')

// 現在のタブ情報だけを抽出
const currentTabs = computed(()=>
return Object.keys()
)

</script>

<template>
    <div>
        <h2>{{ selectedCategoryLabel }}</h2>

        <!-- タブボタン -->
        <button
        v-for="tabkey in currentTabs"
        :key="tabkey"
        @click="selectedTab = tab.value"
        :class="{ active: selectedTab === tab.value }"
        >
        {{ tab.label }}
        </button>

        <!-- タブの内容・カテゴリーによって各タブ切り替え -->
        <component :is="selectedCategory === 'laravelSite' ? LaravelIntro : VueIntro"/>
        <!-- <div v-if="props.selectedCategory === 'laravelSite'">
            <div v-show="selectedTab === 'intro'">LaravelのIntroの内容</div> -->
            <!-- <div v-show="selectedTab === 'tech'">LaravelのTechの内容</div>
            <div v-show="selectedTab === 'process'">LaravelのProcessの内容</div>
            <div v-show="selectedTab === 'result'">LaravelのResultの内容</div> -->
        <!-- </div> -->
        <!-- <div v-if="props.selectedCategory === 'vuePortfolio'">
            <div v-show="selectedTab === 'intro'">VueポートフォリオのIntroの内容</div>
            <div v-show="selectedTab === 'tech'">VueポートフォリオのTechの内容</div>
            <div v-show="selectedTab === 'process'">VueポートフォリオのProcessの内容</div>
            <div v-show="selectedTab === 'result'">VueポートフォリオのResultの内容</div>
        </div> -->
    </div>
</template>