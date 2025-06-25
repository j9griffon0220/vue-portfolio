<script setup>
import { ref, onMounted } from 'vue'
import HeroIntro from './HeroIntro.vue'
import DeviconCloud from './DeviconCloud.vue'
import WhiteoutOverlay from './WhiteoutOverlay.vue'
import TitleReveal from './TitleReveal.vue'

// ステート
const step = ref(0)
const isAnimating = ref(true)
const showEdit = ref(false)
const showWhiteout = ref(false)
const showTitle = ref(false)
const skillIcons = [
  'html5', 'css3', 'tailwindcss', 'javascript', 'jquery', 'vuejs', 'laravel',
  'php', 'docker', 'npm', 'vitejs', 'github', 'sourcetree', 'ssh', 'playwright', 'wordpress'
]
const floatingIcons = ref([])

// ランダム位置生成
const generateRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - 100),
  y: Math.random() * (window.innerHeight - 100),
  opacity: 0,
  scale: 0.5
})

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
      // アイコン中央集合
      step.value = 1
      const centerX = window.innerWidth / 2 - 24 // アイコンサイズ48pxの半分
      const centerY = window.innerHeight / 2 - 24
      floatingIcons.value.forEach((icon, i) => {
        setTimeout(() => {
          icon.x = centerX
          icon.y = centerY
          icon.scale = 0.3
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
  const centerX = window.innerWidth / 2 - 24
  const centerY = window.innerHeight / 2 - 24
  floatingIcons.value = skillIcons.map(() => ({
    x: centerX,
    y: centerY,
    opacity: 1,
    scale: 0.3
  }))
}

onMounted(() => startAnimation())
</script>

<template>
  <div class="hero-animation relative w-full h-screen overflow-hidden">
    <button @click="skip" v-if="isAnimating"
      class="absolute top-4 right-4 z-50 px-4 py-2 bg-blue-500 text-white rounded">
      スキップ
    </button>
    <HeroIntro :show="showEdit" />
    <DeviconCloud :step="step" :icons="floatingIcons" :skillIcons="skillIcons" />
    <WhiteoutOverlay :show="showWhiteout" />
    <TitleReveal :show="showTitle" />
  </div>
</template>