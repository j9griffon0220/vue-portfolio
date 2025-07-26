<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- edit という文字を表示 -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
import { ref } from 'vue'

// h1のDOMを保持するためのref
const introTitle = ref(null)

// 親の HeroAnimation からアクセスできるように公開
defineExpose({
  introTitle,
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="absolute inset-0 z-10 flex items-center justify-center"
    >
      <h1
        ref="introTitle"
        class="font-ibm text-charcoal-gray text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold"
      >
        edit
      </h1>
    </div>
  </transition>
</template>
