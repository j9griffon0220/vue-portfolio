<!-- Worksページ・左側のcomponents -->
<script setup>
import { ref } from 'vue'

// emitを定義（親のWorks.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

// 親から渡される props、definePropsで受け取る
const props = defineProps({
    categories: Array,
    selectedCategory: String
})

const handleClick = (value) => {
    // 親にイベントを通知
    emit('update:selected-category', value)
}
</script>

<template>
    <ul>
        <li
        v-for="category in categories"
        :key="category.value"
        :class="{ active: category.value === selectedCategory}"
        @click="handleClick(category.value)">
        {{ category.label }}
        </li>
    </ul>
</template>