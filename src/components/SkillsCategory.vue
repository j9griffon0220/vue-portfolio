<!-- Skillsページ・左側のcomponents -->
<script setup>
import { ref } from 'vue'
const categories = ['フロントエンド','バックエンド','環境構築・ツール','テスト・その他']

// emitを定義（親のSkills.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

// カテゴリーがクリックされたときに実行
const handleCategorySelect = (category) => {
    emit('update:selected-category', category) // ここがv-model対応部分
}
</script>

<template>
    <ul>
        <li v-for="category in categories"
        :key="category"
        @click = "handleCategorySelect(category)">
        {{ category }}
        </li>
    </ul>
</template>

<style scoped></style>