<!-- アイコンの管理を一元化・再利用性を高める -->
<script setup>
// importや状態の定義
import { defineAsyncComponent, computed, defineProps } from 'vue'

// 'name'を受け取り対応するSVGを動的に取り込む
const props = defineProps({
  name: { type: String, required: true }, // 'vue' → 'vue.svg'を読み込む
})

// バッククォート ＆ 相対パスで動的にSVGを読み込む
const iconComponent = defineAsyncComponent(
  () => import(`../assets/icons/${props.name}.svg`),
)

// エラーハンドリングの記述まだ
</script>

<template>
  <component :is="iconComponent" />
</template>

<!-- 必要ならスタイル -->
<style scoped></style>
