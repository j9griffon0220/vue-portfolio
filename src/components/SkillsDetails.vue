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
    { name: "HTML", icon: "devicon-html5-plain",
    description: "W3C Markup Validationを使用し、文法エラーがないようマークアップ。"},
    { name: "CSS", icon: "devicon-css3-plain",
    description: "保守性を意識してBEMで設計。相対値やCSS関数を活用し、:root変数で色やフォントを一元管理。"},
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original",
    description: "カスタムCSS関数とTailwindCSSを組み合わせ、レスポンシブと保守性を意識。"},
    { name: "Vue.js", icon: "devicon-vuejs-plain", description: ""}
    ],
    'バックエンド':[
    { name: "Laravel", icon: "devicon-laravel-original",
    description: "サイトをLaravelで制作・公開。ルーティングやバリデーション、Gメール送信機能を実装。"},
    { name: "PHP", icon: "devicon-php-plain",
    description: "Laravelを通じてPHPに触れ、Composerを使ったパッケージ管理も経験。"}
    ],
    '環境構築・ツール':[
    { name: "Docker", icon: "devicon-docker-plain",
    description: "Laravel開発環境や、自社WordPress案件の学習環境として構築・使用。"},
    { name: "npm", icon: "devicon-npm-original-wordmark",
    description: "LaravelやVue開発時に使用。パッケージ管理やビルドを効率化。"},
    { name: "vite", icon: "devicon-vitejs-plain",
    description: "Vue開発時のビルドツールとして使用。"},
    { name: "laravelmix", icon: "",
    description: "Laravelのフロントエンドビルドに使用。JSのコンパイルに対応。"},
    { name: "GitHub", icon: "devicon-github-original",
    description: "Laravelサイトのデプロイやバージョン管理に使用。"},
    { name: "SourceTree", icon: "devicon-sourcetree-original",
    description: "Laravelサイト制作・公開時にGit操作に使用。ブランチ管理やコミットを効率化。"},
    { name: "SSH", icon: "devicon-ssh-original",
    description: "Laravelサイトのデプロイ時の接続・操作に使用。"},
    { name: "LocalTunnel", icon: "",
    description: "Laravelサイトを公開前に関係者に共有・確認してもらうために使用。"}
    ],
    'テスト・その他':[
    { name: "PHPUnit", icon: "", description: ""},
    { name: "Laravel Dusk", icon: "", description: ""},
    { name: "Playwright", icon: "devicon-playwright-plain", description: ""},
    { name: "WordPress", icon: "devicon-wordpress-plain",
    description: "Dockerで環境構築。操作・構造の習得に向けて学習中。"}
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