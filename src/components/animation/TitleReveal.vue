<!-- HeroAnimation.vueのコンポーネントファイル -->
<!-- アニメーション終了後のタイトル表示 -->
<script setup>
// importや状態の定義
defineProps({ show: Boolean })
</script>

<template>
  <transition name="fade">
    <div class="h-full">
      <div
        v-if="show"
        class="absolute inset-0 z-40 flex items-center justify-center"
      >
        <h1
          class="font-roboto text-charcoal-gray animate-fade-in text-center text-[calc(1.8rem+0.3vw)] leading-[1.2] font-semibold italic"
        >
          Ayako Nakayama portfolio
        </h1>
      </div>
    </div>
  </transition>
</template>
