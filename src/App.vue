<!-- ルーティング管理専用にする -->
<!-- ここで BaseLayout.vue を使わず、各ページで使う -->

<script setup>
</script>

<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<style scoped>
</style>
