<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />

    <!-- メインコンテンツ（各ページのviewsファイルが入る） -->
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<style scoped></style>