<script setup>
import { ref } from 'vue'

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Skills', link: '/Skills' },
  { text: 'Works', link: '/works' },
  // { text: 'Note', link: '/note' },
]

const selectedItem = ref('Home') // 初期選択（テキストで）

const handleSelect = (item) => {
  selectedItem.value = item.text
}
</script>

<template>
  <nav>
    <ul
      class="font-ibm text-charcoal-gray mb-[clamp(3.05rem,3.05rem+0.40vw,3.81rem)] flex max-w-full list-none items-center justify-between font-normal"
    >
      <li
        v-for="item in navItems"
        :key="item.text"
        @click="handleSelect(item)"
        :class="[
          'font-ibm relative px-4 py-2 text-[calc(0.85rem+0.2vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out',
          selectedItem === item.text
            ? 'text-charcoal-gray hover:bg-charcoal-gray/5 active:bg-charcoal-gray/50 active:text-gradation-white'
            : 'text-charcoal-gray/60 hover:bg-charcoal-gray/5',
        ]"
        role="navigation"
      >
        <router-link :to="item.link">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
