<!-- vue の雛形ファイル -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from '@/components/Icon.vue'

// アニメーションの状態管理
const currentStep = ref(0)
const isAnimating = ref(false)

// スキルアイコンの配列（.svg拡張子なし）
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

// ランダム配置されたアイコンの状態
const floatingIcons = ref([])
const showEditText = ref(false)
const showWhiteout = ref(false)
const showTitle = ref(false)

// ランダムな位置を生成
const generateRandomPosition = () => {
  return {
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100),
    opacity: 0,
    scale: 0.5
  }
}

// アニメーションの開始
const startAnimation = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentStep.value = 0
  
  // 状態をリセット
  showEditText.value = false
  showWhiteout.value = false
  showTitle.value = false
  floatingIcons.value = []
  
  // Step 1: アイコンをランダム配置して浮かび上がらせる
  setTimeout(() => {
    floatingIcons.value = skillIcons.map(() => generateRandomPosition())
    showEditText.value = true
    
    setTimeout(() => {
      // アイコンを徐々に表示（3秒かけて）
      floatingIcons.value.forEach((icon, index) => {
        setTimeout(() => {
          icon.opacity = 1
          icon.scale = 1
        }, index * 150) // よりゆっくりと表示
      })
      
      // Step 2: アイコンが中央に集まる（2秒かけて）
      setTimeout(() => {
        currentStep.value = 1
        floatingIcons.value.forEach((icon, index) => {
          setTimeout(() => {
            icon.x = window.innerWidth / 2 - 25
            icon.y = window.innerHeight / 2 - 25
            icon.scale = 0.3
          }, index * 80) // よりゆっくりと集まる
        })
        
        // Step 3: ホワイトアウト
        setTimeout(() => {
          currentStep.value = 2
          showWhiteout.value = true
          showEditText.value = false
          
          // Step 4: タイトル表示
          setTimeout(() => {
            currentStep.value = 3
            showTitle.value = true
            isAnimating.value = false
          }, 1500) // タイトル表示までの時間を延長
        }, 2500) // ホワイトアウトまでの時間を延長
      }, 3500) // アイコン集約までの時間を延長
    }, 500)
  }, 100)
}

// コンポーネントマウント時にアニメーション開始
onMounted(() => {
  startAnimation()
})

// クリーンアップ
onUnmounted(() => {
  isAnimating.value = false
})
</script>

<template>
  <div class="hero-animation relative w-full h-screen overflow-hidden">
    <!-- デバッグ用コントロール -->
    <div class="absolute top-4 right-4 z-50">
      <button 
        @click="startAnimation"
        :disabled="isAnimating"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isAnimating ? 'アニメーション中...' : '再実行' }}
      </button>
    </div>

    <!-- Step 1: "edit" テキスト -->
    <div 
      v-if="showEditText"
      class="absolute inset-0 flex items-center justify-center z-10"
      :class="{ 'opacity-0': currentStep >= 2 }"
    >
      <h1 class="text-6xl font-bold text-gray-800 transition-opacity duration-1000">
        edit
      </h1>
    </div>

    <!-- 浮遊するスキルアイコン -->
    <div 
      v-for="(icon, index) in floatingIcons"
      :key="index"
      class="absolute w-12 h-12 transition-all duration-3000 ease-in-out"
      :style="{
        left: `${icon.x}px`,
        top: `${icon.y}px`,
        opacity: icon.opacity,
        transform: `scale(${icon.scale})`,
        zIndex: currentStep === 1 ? 20 : 5
      }"
    >
      <Icon :name="skillIcons[index]" class="w-full h-full" />
    </div>

    <!-- Step 3: ホワイトアウト -->
    <div 
      v-if="showWhiteout"
      class="absolute inset-0 bg-white z-30 transition-opacity duration-2000"
      :class="{ 'opacity-100': showWhiteout }"
    ></div>

    <!-- Step 4: タイトル -->
    <div 
      v-if="showTitle"
      class="absolute inset-0 flex items-center justify-center z-40"
    >
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          My name portfolio
        </h1>
        <h2 class="text-2xl text-gray-600 animate-fade-in-delay">
          Ayako Nakayama portfolio
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-animation {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s both;
}
</style>