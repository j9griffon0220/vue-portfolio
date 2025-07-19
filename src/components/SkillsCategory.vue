<!-- Skillsページ・左側のcomponents -->
<script setup>
import { ref } from 'vue'
const categories = [
  'フロントエンド',
  'バックエンド',
  '環境構築・ツール',
  'テスト・その他',
]

// 親から渡される props、definePropsで受け取る
const props = defineProps({
  selectedCategory: {
    type: String,
    default: 'フロントエンド', //デフォルト値を念のため設定
  },
})

// emitを定義（親のSkills.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

// カテゴリーがクリックされたときに実行
const handleCategorySelect = (category) => {
  emit('update:selected-category', category) // ここがv-model対応部分
}
</script>

<template>
  <ul class="list-inside list-disc">
    <li
      v-for="category in categories"
      :key="category"
      @click="handleCategorySelect(category)"
      :class="[
        'font-ibm mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] max-w-8/10 px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium transition-colors duration-150 ease-in-out',
        category === selectedCategory
          ? 'active:bg-charcoal-gray/50 active:text-gradation-white text-charcoal-gray hover:bg-charcoal-gray/5 active:scale-[.98]'
          : 'text-charcoal-gray/60 hover:bg-charcoal-gray/5',
      ]"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style scoped></style>
