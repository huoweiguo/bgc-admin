<template>
  <div class="page-title">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">工作台</el-breadcrumb-item>
      <template v-if="matched.length > 0">
        <el-breadcrumb-item v-for="item in matched" :key="item.name" :to="{ path: item.path }">{{ item.meta?.title
          }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const matched = ref(route.matched || [])

console.log(route.matched, 'route')
</script>

<style lang="scss">
.page-title {
  .el-breadcrumb__inner.is-link {
    color: #fff;
  }

  .el-breadcrumb__inner {
    color: #fff;
  }
}
</style>