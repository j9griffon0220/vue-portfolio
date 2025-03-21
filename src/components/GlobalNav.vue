<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/Skills">Skills</RouterLink></li>
            <li><RouterLink to="/works">works</RouterLink></li>
            <li><RouterLink to="/note">note</RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>
</style>