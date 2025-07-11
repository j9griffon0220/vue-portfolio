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
      v-for="category in categories"
      :key="category.value"
      @click="handleClick(category.value)"
      :class="[
        'font-ibm mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] max-w-8/10 px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out',
        category.value === selectedCategory
          ? 'active:bg-charcoal-gray/50 active:text-gradation-white text-charcoal-gray hover:bg-charcoal-gray/5 active:scale-[.98]'
          : 'text-charcoal-gray/60 hover:bg-charcoal-gray/5',
      ]"
    >
      <!-- <li
      class="font-ibm text-charcoal-gray mb-[clamp(1.95rem,1.95rem+0.30vw,2.44rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal"
      v-for="category in categories"
      :key="category.value"
      :class="{ active: category.value === selectedCategory }"
      @click="handleClick(category.value)"
    > -->
      {{ category.label }}
    </li>
  </ul>
</template>
