<!-- Worksページ・左側のcomponents -->
<script setup>
import { ref } from 'vue';
const categories = [
    { label: 'Laravel制作サイト', value: 'laravelSite' },
    { label: 'Vueポートフォリオ', value: 'vuePortfolio' }
]

// emitを定義（親のWorks.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

const handleClick = (value) => {
    emit('update:selected-category', value)
}
</script>

<template>
    <ul>
        <li
        v-for="category in categories"
        :key="category.value"
        @click="handleClick(category.value)"
        :class="{ active: selectedCategory === category.value }">
        {{ category.label }}
        </li>
    </ul>
</template>