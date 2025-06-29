<!-- Worksページ・左側のcomponents -->
<script setup>
import { ref } from 'vue'

// emitを定義（親のWorks.vueに通知するため）
const emit = defineEmits(['update:selected-category'])

// 親から渡される props、definePropsで受け取る
const props = defineProps({
  categories: Array,
  selectedCategory: String,
})

const handleClick = (value) => {
  // 親にイベントを通知
  emit('update:selected-category', value)
}
</script>

<template>
  <ul>
    <li
      class="font-ibm text-charcoal-gray mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal"
      v-for="category in categories"
      :key="category.value"
      :class="{ active: category.value === selectedCategory }"
      @click="handleClick(category.value)"
    >
      {{ category.label }}
    </li>
  </ul>
</template>
