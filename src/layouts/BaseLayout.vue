<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <main>
        <div>
            <!-- ここに各ページの左エリアが入る -->
            <slot name="left"></slot>
        </div>
        <div>
            <!-- ここに各ページの右エリアが入る -->
            <slot name="right"></slot>
        </div>
    </main>
    <Footer />
</template>