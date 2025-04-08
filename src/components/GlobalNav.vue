<script setup>
const navItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Skills', link: '/Skills' },
    { text: 'Works', link: '/works' },
    { text:'Note', link: '/note' }
]
</script>

<template>
    <nav>
        <ul>
            <li v-for="item in navItems" :key="item.text">
                <router-link :to="item.link">
                    {{ item.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
</style>