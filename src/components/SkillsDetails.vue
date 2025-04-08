<!-- Skillsページ・右側のcomponents -->
<script setup>
// import { ref, computed} from 'vue'

// 親から渡される props、definePropsで受け取る
const props = defineProps({
    selectedCategory: {
        type: String,
        default: 'フロントエンド', //デフォルト値を念のため設定
    },
})

const skills = {
    'フロントエンド':[
    { name: "HTML", icon: "devicon-html5-plain", description: "使用"},
    { name: "CSS", icon: "devicon-css3-plain", description: ""},
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", description: ""},
    { name: "Vue.js", icon: "devicon-vuejs-plain", description: ""}
    ],
    'バックエンド':[
    { name: "Laravel", icon: "devicon-laravel-original", description: ""},
    { name: "PHP", icon: "devicon-php-plain", description: ""}
    ],
    '環境構築・ツール':[
    { name: "Docker", icon: "devicon-docker-plain", description: ""},
    { name: "npm", icon: "devicon-npm-original-wordmark", description: ""},
    { name: "laravelmix", icon: "", description: ""},
    { name: "GitHub", icon: "devicon-github-original", description: ""},
    { name: "SourceTree", icon: "devicon-sourcetree-original", description: ""},
    { name: "SSH", icon: "devicon-ssh-original", description: ""},
    { name: "LocalTunnel", icon: "", description: ""}
    ],
    'テスト・その他':[
    { name: "PHPUnit", icon: "", description: ""},
    { name: "Laravel Dusk", icon: "", description: ""},
    { name: "Playwright", icon: "devicon-playwright-plain", description: ""}
    ]
}
</script>

<template>
    <div>
        <h2>{{ props.selectedCategory }}</h2>
        <ul>
            <li v-for="skill in skills[selectedCategory]"
            :key="skill.name">
            <i :class="skill.icon"></i> {{ skill.name }} - {{ skill.description }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>