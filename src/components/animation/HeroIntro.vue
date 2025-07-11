<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- edit という文字を表示 -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="absolute inset-0 z-10 flex items-center justify-center"
    >
      <h1
        class="font-ibm text-charcoal-gray text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold"
      >
        edit
      </h1>
    </div>
  </transition>
</template>
