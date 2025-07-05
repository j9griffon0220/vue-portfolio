<script setup>
import { ref, onMounted } from 'vue'
import HeroIntro from './HeroIntro.vue'
import DeviconCloud from './DeviconCloud.vue'
import WhiteoutOverlay from './WhiteoutOverlay.vue'
import TitleReveal from './TitleReveal.vue'

// ステート・各要素の表示/非表示を管理
const step = ref(0)
const isAnimating = ref(true)
const showEdit = ref(false)
const showWhiteout = ref(false)
const showTitle = ref(false)
const skillIcons = [
  'html5',
  'css3',
  'tailwindcss',
  'javascript',
  'jquery',
  'vuejs',
  'laravel',
  'php',
  'docker',
  'npm',
  'vitejs',
  'github',
  'sourcetree',
  'ssh',
  'playwright',
  'wordpress',
]
const floatingIcons = ref([])

// ランダム位置生成
const generateRandomPosition = () => {
  // メインコンテンツのmax-w-[85vw]を考慮した展開幅計算
  const viewportWidth = window.innerWidth
  const maxContentWidth = viewportWidth * 0.85 // mainのmax-w-[85vw]

  // 実際に使用可能な幅（中央寄せを考慮）
  const startX = (viewportWidth - maxContentWidth) / 2

  // アイコンサイズを考慮したマージン計算
  // calc(1.8rem + 0.3vw) の最大値を考慮（約40-50px程度）
  const iconMargin = 60

  return {
    x: startX + Math.random() * (maxContentWidth - iconMargin),
    y: Math.random() * (window.innerHeight - iconMargin),
    opacity: 0,
    scale: 0.5,
  }
}

// アニメーション進行
const startAnimation = () => {
  showEdit.value = true
  floatingIcons.value = skillIcons.map(() => generateRandomPosition())
  setTimeout(() => {
    // アイコン表示
    floatingIcons.value.forEach((icon, i) => {
      setTimeout(() => {
        icon.opacity = 1
        icon.scale = 1
      }, i * 100)
    })
    setTimeout(() => {
      // アイコン中央集合（同時にフェードアウト）
      step.value = 1
      // メインコンテンツのmax-w-[85vw]を考慮した中央位置を計算
      const viewportWidth = window.innerWidth
      const maxContentWidth = viewportWidth * 0.85
      const startX = (viewportWidth - maxContentWidth) / 2
      const centerX = startX + maxContentWidth / 2 // コンテンツ領域の中央
      const centerY = window.innerHeight / 2 - 40 // edit文字の中心位置に調整
      floatingIcons.value.forEach((icon, i) => {
        setTimeout(() => {
          icon.x = centerX
          icon.y = centerY
          icon.scale = 0.3
          // 段階的なフェードアウト
          setTimeout(() => {
            icon.opacity = 0.5
            setTimeout(() => {
              icon.opacity = 0
            }, 200)
          }, 100)
        }, i * 50)
      })

      setTimeout(() => {
        // ホワイトアウト
        showEdit.value = false
        showWhiteout.value = true
        setTimeout(() => {
          // タイトル表示
          showWhiteout.value = false
          showTitle.value = true
          isAnimating.value = false
        }, 1500)
      }, 2000)
    }, 2000)
  }, 500)
}

// スキップ
const skip = () => {
  showEdit.value = false
  showWhiteout.value = false
  showTitle.value = true
  step.value = 2
  isAnimating.value = false

  // メインコンテンツのmax-w-[85vw]を考慮した中央位置を計算
  const viewportWidth = window.innerWidth
  const maxContentWidth = viewportWidth * 0.85
  const startX = (viewportWidth - maxContentWidth) / 2
  const centerX = startX + maxContentWidth / 2 - 24
  const centerY = window.innerHeight / 2 - 24

  floatingIcons.value = skillIcons.map(() => ({
    x: centerX,
    y: centerY,
    opacity: 0,
    scale: 0.3,
  }))
}

onMounted(() => startAnimation())
</script>

<template>
  <div class="hero-animation relative h-screen w-full overflow-hidden">
    <button
      @click="skip"
      v-if="isAnimating"
      class="font-ibm text-charcoal-gray/60 hover:bg-charcoal-gray/5 absolute top-0 right-0 z-50 px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium underline"
    >
      <!-- text-gradation-white bg-charcoal-gray/50 -->
      <!-- class="font-ibm absolute top-0 right-0 z-50 rounded px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium underline transition-colors duration-200 ease-in-out" -->
      Skip
    </button>
    <HeroIntro :show="showEdit" />
    <DeviconCloud
      :step="step"
      :icons="floatingIcons"
      :skillIcons="skillIcons"
    />
    <WhiteoutOverlay :show="showWhiteout" />
    <TitleReveal :show="showTitle" />
  </div>
</template>
