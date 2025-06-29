<!-- Skillsページ・左側のcomponents -->
<script setup>
import { ref } from 'vue'
const categories = [
  'フロントエンド',
  'バックエンド',
  '環境構築・ツール',
  'テスト・その他',
]

// emitを定義（親のSkills.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

// カテゴリーがクリックされたときに実行
const handleCategorySelect = (category) => {
  emit('update:selected-category', category) // ここがv-model対応部分
}
</script>

<template>
  <ul>
    <li
      class="font-ibm text-charcoal-gray mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal"
      v-for="category in categories"
      :key="category"
      @click="handleCategorySelect(category)"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style scoped></style>
