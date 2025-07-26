<script setup>
import { ref, onMounted, nextTick } from 'vue'
import HeroIntro from './HeroIntro.vue'
import DeviconCloud from './DeviconCloud.vue'
import WhiteoutOverlay from './WhiteoutOverlay.vue'
import TitleReveal from './TitleReveal.vue'

// アニメーション表示エリアDOM取得用の ref() を追加
const heroArea = ref(null)
// heroAreaInfoは数値情報を持つオブジェクト（位置とサイズの数値情報）
let heroAreaInfo = null // ← これが必要！

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

// 子コンポーネント HeroIntro内の h1 にアクセス用
const introEditRef = ref(null)

// HeroIntro内の h1 座標を取得して中心に集める
function getIntroTitleCenter() {
  const el = introEditRef.value?.introTitle
  const editArea = el.getBoundingClientRect()
  return {
    x: editArea.left + editArea.width / 2,
    y: editArea.top + editArea.height / 2,
  }
}
// const introEditInfo = introEditRef.value?.introTitle?.getBoundingClientRect()

// 再利用しやすいように関数にして座標を取る
function updateHeroAreaInfo() {
  heroAreaInfo = heroArea.value.getBoundingClientRect() // ← heroAreaInfo に代入
}

// 再利用しやすいよう描画領域 の計算を関数に
function getHeroAreaCenter() {
  updateHeroAreaInfo() // 座標を取る
  return {
    x: heroAreaInfo.left + heroAreaInfo.width / 2,
    y: heroAreaInfo.top + heroAreaInfo.height / 2,
  }
}

onMounted(async () => {
  await nextTick() // 描画完了を待つ
  updateHeroAreaInfo()
  const { x: centerX, y: centerY } = getIntroTitleCenter()
})

// ランダム位置生成
const generateRandomPosition = () => {
  // アイコンサイズを考慮したマージン計算
  // calc(1.8rem + 0.3vw) の最大値を考慮（約40-50px程度）
  const iconMargin = 60

  return {
    x:
      heroAreaInfo.left +
      iconMargin +
      Math.random() * (heroAreaInfo.width - iconMargin * 2),
    y:
      heroAreaInfo.top +
      iconMargin +
      Math.random() * (heroAreaInfo.height - iconMargin * 2),
    opacity: 0,
    scale: 0.5,
  }
}

// アニメーション進行
const startAnimation = () => {
  showEdit.value = true
  floatingIcons.value = skillIcons.map(() =>
    generateRandomPosition(heroAreaInfo),
  )
  setTimeout(() => {
    // アイコン表示
    floatingIcons.value.forEach((icon, i) => {
      setTimeout(() => {
        icon.opacity = 1
        icon.scale = 1
      }, i * 100)
    })
    setTimeout(async () => {
      // アイコン中央集合（同時にフェードアウト）
      step.value = 1

      await nextTick()
      updateHeroAreaInfo()
      const { x: centerX, y: centerY } = getIntroTitleCenter()
      // const { x: centerX, y: centerY } = getHeroAreaCenter()

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
const skip = async () => {
  showEdit.value = false
  showWhiteout.value = false
  showTitle.value = true
  step.value = 2
  isAnimating.value = false

  // DOM更新を待ってから中心取得
  await nextTick()
  updateHeroAreaInfo()
  const { x: centerX, y: centerY } = getHeroAreaCenter()
  // const centerX = heroAreaInfo.left + heroAreaInfo.width / 2
  // const centerY = heroAreaInfo.top + heroAreaInfo.height / 2

  floatingIcons.value = skillIcons.map(() => ({
    x: centerX,
    y: centerY,
    opacity: 0,
    scale: 0.3,
  }))
}

// アニメーションの起点を定義
onMounted(async () => {
  await nextTick()
  console.log('localStorage テスト実行') // ← 確認用
  localStorage.setItem('testKey', 'hello')
  updateHeroAreaInfo()
  const hasSeen = sessionStorage.getItem('hasSeenAnimation')
  if (hasSeen) {
    // すでに見た場合はアニメーションをスキップ
    skip()
  } else {
    // 初回はアニメーションを実行
    startAnimation()
    sessionStorage.setItem('hasSeenAnimation', 'true')
  }
})
</script>

<template>
  <div
    ref="heroArea"
    class="relative h-full w-full overflow-hidden bg-green-100"
  >
    <button
      @click="skip"
      v-if="isAnimating"
      aria-label="スキップしてメイン画面へ"
      class="font-ibm text-charcoal-gray/60 hover:bg-charcoal-gray/5 decoration-charcoal-gray/60 absolute top-0 right-0 z-50 px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium underline decoration-2 underline-offset-8"
    >
      Skip
    </button>
    <HeroIntro :show="showEdit" ref="introEditRef" />
    <DeviconCloud
      :step="step"
      :icons="floatingIcons"
      :skillIcons="skillIcons"
    />
    <WhiteoutOverlay :show="showWhiteout" />
    <TitleReveal :show="showTitle" />
  </div>
</template>
