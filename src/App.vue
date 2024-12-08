<script setup lang="ts">
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <div class="bgc__container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.bgc__container {
  height: 100vh;
  background-color: rgba(16, 16, 20, 1);
}
</style>
