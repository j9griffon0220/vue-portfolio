<script setup>
import { ref, onMounted, nextTick } from 'vue'
import HeroIntro from './HeroIntro.vue'
import DeviconCloud from './DeviconCloud.vue'
import WhiteoutOverlay from './WhiteoutOverlay.vue'
import TitleReveal from './TitleReveal.vue'

// アニメーション表示エリア（bg-green-100）DOM取得用の ref() を追加
const heroArea = ref(null)
// heroAreaInfoは数値情報を持つオブジェクト（heroArea位置とサイズの数値情報）
let heroAreaInfo = null // ← これが必要！

// アニメーションの進行状態や表示/非表示フラグを管理するリアクティブ変数群
const step = ref(0)
const isAnimating = ref(true)
const showEdit = ref(false)
const showWhiteout = ref(false)
const showTitle = ref(false)

// 使用するスキルアイコン名のリスト
const skillIcons = [
  'html5',
  'css3',
  'tailwindcss',
  'javascript',
  'jquery',
  'vuejs',
  'laravel',
  'php',
  'composer',
  'docker',
  'npm',
  'vitejs',
  'vercel',
  'github',
  'sourcetree',
  'ssh',
  'playwright',
  'wordpress',
  'photoshop',
  'illustrator',
]

// アイコンの現在の座標や状態（opacity/scale）を保持する配列
const floatingIcons = ref([])

// 子コンポーネント HeroIntro 内の <h1> 要素にアクセスするための ref
const introEditRef = ref(null)

// HeroIntro 内の <h1> 要素の画面上の座標を取得して、その中心位置を返す関数
async function getIntroTitleCenter() {
  await nextTick()

  // ブラウザの描画完了を待つ
  await new Promise((resolve) => requestAnimationFrame(resolve))

  // 子コンポーネントの h1 要素を取得
  const el = introEditRef.value?.introTitle
  // if (!el) {
  //   // h1 が見つからない場合は heroArea の中心を返す（安全策）
  //   console.warn('introTitle element not found, using heroArea center')
  //   return getHeroAreaCenter()
  // }

  // h1 要素の座標とサイズを取得（ビューポート基準の絶対座標）
  const h1Rect = el.getBoundingClientRect()
  const parentRect = heroArea.value.getBoundingClientRect()
  return {
    x: h1Rect.left - parentRect.left + h1Rect.width / 2,
    y: h1Rect.top - parentRect.top + h1Rect.height / 2,
  }
}

// heroAreaの位置とサイズ情報を更新する関数
function updateHeroAreaInfo() {
  heroAreaInfo = heroArea.value.getBoundingClientRect() // ← heroAreaInfo に代入
}

// コンポーネントがマウントされた時（初期表示直後）に座標取得などの準備をする
onMounted(async () => {
  await nextTick() // DOM描画を待つ
  updateHeroAreaInfo() // heroAreaの位置・サイズを取得
  const { x: centerX, y: centerY } = await getIntroTitleCenter() // HeroIntro内h1の中心座標取得
  // ここで centerX, centerY はビューポート基準の絶対座標
  console.log('center:', { x: centerX, y: centerY })
})

// ランダムな位置を生成して返す関数（アイコンの初期配置用）
const generateRandomPosition = () => {
  // heroAreaInfoがない場合は画面中央を返す（安全策）
  if (!heroAreaInfo) {
    console.warn('heroAreaInfo not available, using fallback values')
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      opacity: 0,
      scale: 0.5,
    }
  }

  // アイコンの配置マージン（見た目の余白確保）
  // calc(1.8rem + 0.3vw) の最大値を考慮（約40-50px程度）
  const iconMargin = 60

  // heroAreaの絶対座標を基準にランダムな位置を計算して返す
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

// アニメーション開始関数。アイコンのランダム配置、表示、集合とフェードアウトを制御
const startAnimation = async () => {
  showEdit.value = true // HeroIntroの表示をオンにする

  // DOM更新を待ってからアイコン位置を計算
  await nextTick()
  updateHeroAreaInfo() // heroAreaの最新情報を取得

  // skillIconsの数だけランダム位置を生成し、floatingIconsにセット
  floatingIcons.value = skillIcons.map(() => generateRandomPosition())

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
      updateHeroAreaInfo() // heroArea位置情報更新
      // await を使って HeroIntro内h1の中心座標を取得（絶対座標）
      const center = await getIntroTitleCenter()

      // 各アイコンを中心座標に移動し、縮小・段階的フェードアウトさせる
      floatingIcons.value.forEach((_, i) => {
        setTimeout(() => {
          const newIcons = [...floatingIcons.value]
          newIcons[i] = {
            ...newIcons[i],
            x: center.x,
            y: center.y,
            scale: 0.3,
          }
          floatingIcons.value = newIcons

          // 段階的なフェードアウト
          setTimeout(() => {
            const fadeIcons = [...floatingIcons.value]
            fadeIcons[i] = {
              ...fadeIcons[i],
              opacity: 0.5,
            }
            floatingIcons.value = fadeIcons

            setTimeout(() => {
              const finalIcons = [...floatingIcons.value]
              finalIcons[i] = {
                ...finalIcons[i],
                opacity: 0,
              }
              floatingIcons.value = finalIcons
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

// スキップ処理。アニメーションを飛ばして即タイトル表示状態にする
const skip = async () => {
  showEdit.value = false
  showWhiteout.value = false
  showTitle.value = true
  step.value = 2
  isAnimating.value = false

  // DOM更新を待ってから中心取得
  await nextTick()
  updateHeroAreaInfo()
  const { x: centerX, y: centerY } = await getIntroTitleCenter()

  floatingIcons.value = skillIcons.map(() => ({
    x: centerX,
    y: centerY,
    opacity: 0,
    scale: 0.3,
  }))
}

// アニメーションの起点を定義
// 開発モードフラグを使って制御
const isDevMode = true // ← 開発中だけ true にしておく

onMounted(() => {
  if (isDevMode) {
    sessionStorage.removeItem('hasSeenAnimation')
  }
  console.log('localStorage テスト実行') // ← 確認用
  localStorage.setItem('testKey', 'hello')

  // セッションストレージでアニメーション既視確認
  const hasSeen = sessionStorage.getItem('hasSeenAnimation')
  if (hasSeen) {
    // すでに見た場合はアニメーションをスキップ
    skip()
  } else {
    // 初回はアニメーションを実行、セッションストレージに記録
    startAnimation()
    sessionStorage.setItem('hasSeenAnimation', 'true')
  }
})
</script>

<template>
  <div
    ref="heroArea"
    class="bg-nuance-gray relative h-full w-full overflow-hidden"
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
