<!-- Skillsページ・右側のcomponents -->
<script setup>
// import { ref, computed} from 'vue'
import Icon from '@/components/Icon.vue'

// 親から渡される props、definePropsで受け取る
const props = defineProps({
  selectedCategory: {
    type: String,
    default: 'フロントエンド', //デフォルト値を念のため設定
  },
})

const skills = {
  フロントエンド: [
    {
      name: 'HTML',
      icon: 'html5',
      description:
        'W3C Markup Validationを使用し、文法エラーがないようマークアップ。',
    },
    {
      name: 'CSS',
      icon: 'css3',
      description:
        '保守性を意識してBEMで設計。相対値やCSS関数を活用し、:root変数で色やフォントを一元管理。',
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwindcss',
      description:
        'カスタムCSS関数とTailwindCSSを組み合わせ、レスポンシブと保守性を意識。',
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
      description:
        'Leafletなどのプラグインを用い、動的な地図描画やLaravelとの連携を実装。',
    },
    {
      name: 'jQuery',
      icon: 'jquery',
      description:
        'LaravelサイトのUI補助やフォーム制御を中心に、jQueryで軽量な動きを実装。',
    },
    {
      name: 'Vue.js',
      icon: 'vuejs',
      description:
        'vue-routerを活用し、状態管理とページ切替を効率化。use/headでmeta情報を動的に設定。',
    },
  ],
  バックエンド: [
    {
      name: 'Laravel',
      icon: 'laravel',
      description:
        'サイトをLaravelで制作・公開。ルーティングやバリデーション、Gメール送信機能を実装。',
    },
    {
      name: 'PHP',
      icon: 'php',
      description:
        'Laravelを通じてPHPに触れ、Composerを使ったパッケージ管理も経験。',
    },
  ],
  '環境構築・ツール': [
    {
      name: 'Docker',
      icon: 'docker',
      description:
        'Laravel開発環境や、自社WordPress案件の学習環境として構築・使用。',
    },
    {
      name: 'npm',
      icon: 'npm',
      description: 'LaravelやVue開発時に使用。パッケージ管理やビルドを効率化。',
    },
    {
      name: 'vite',
      icon: 'vitejs',
      description: 'Vue開発時のビルドツールとして使用。',
    },
    {
      name: 'laravelmix',
      icon: '',
      description:
        'Laravelのフロントエンドビルドに使用。JSのコンパイルに対応。',
    },
    {
      name: 'GitHub',
      icon: 'github',
      description: 'Laravelサイトのデプロイやバージョン管理に使用。',
    },
    {
      name: 'SourceTree',
      icon: 'sourcetree',
      description:
        'Laravelサイト制作・公開時にGit操作に使用。ブランチ管理やコミットを効率化。',
    },
    {
      name: 'SSH',
      icon: 'ssh',
      description: 'Laravelサイトのデプロイ時の接続・操作に使用。',
    },
    {
      name: 'LocalTunnel',
      icon: '',
      description:
        'Laravelサイトを公開前に関係者に共有・確認してもらうために使用。',
    },
  ],
  'テスト・その他': [
    {
      name: 'PHPUnit',
      icon: '',
      description:
        'バリデーションや例外処理、メール送信ロジックを対象に、Unit/Featureテストを実施。',
    },
    {
      name: 'Laravel Dusk',
      icon: '',
      description:
        ' Laravelに統合された環境で、フォームの入力〜送信完了までの流れをE2Eで検証。',
    },
    {
      name: 'Playwright',
      icon: 'playwright',
      description: 'UIの動作確認を目的に、E2Eテストコードを作成・実行。',
    },
    {
      name: 'WordPress',
      icon: 'wordpress',
      description: 'Dockerで環境構築。操作・構造の習得に向けて学習中。',
    },
  ],
}
</script>

<template>
  <div>
    <h2
      class="font-ibm text-charcoal-gray mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(1.51rem+0.29vw)] leading-[1.3] font-medium"
    >
      {{ props.selectedCategory }}
    </h2>
    <ul>
      <li
        class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] flex items-start space-x-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal last:mb-0"
        v-for="skill in skills[selectedCategory]"
        :key="skill.name"
      >
        <Icon
          v-if="skill.icon"
          :name="skill.icon"
          class="text-smoky-aqua inline-block h-[calc(1.8rem+0.3vw)] w-[calc(1.8rem+0.3vw)] shrink-0"
        />
        <span>{{ skill.name }} ： {{ skill.description }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
