<script setup>
const navItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Skills', link: '/Skills' },
  { text: 'Works', link: '/works' },
  { text: 'Note', link: '/note' },
]
</script>

<template>
  <nav>
    <ul
      class="font-ibm text-charcoal-gray flex list-none justify-center font-normal"
    >
      <li
        v-for="item in navItems"
        :key="item.text"
        class="text-[calc(0.9rem+0.25vw)] leading-[1.5]"
      >
        <router-link :to="item.link">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
