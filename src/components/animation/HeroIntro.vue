<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- edit という文字を表示 -->
<script setup>
// importや状態の定義
import { ref } from 'vue'

defineProps({ show: Boolean })

// h1要素のrefを定義
const introTitle = ref(null)

// 親コンポーネントからアクセスできるように公開
defineExpose({
  introTitle,
})
</script>

<template>
  <div
    v-show="show"
    class="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ease-in-out"
    :class="{ 'opacity-0': !show, 'opacity-100': show }"
  >
    <h1
      ref="introTitle"
      class="font-roboto text-charcoal-gray text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold italic"
    >
      edit
    </h1>
  </div>
</template>
