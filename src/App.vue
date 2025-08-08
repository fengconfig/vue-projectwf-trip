<template>
  <div class="app">
    <!-- 路由占位 -->
    <router-view />
    <!-- 底部导航栏 -->
    <tab-bar v-if="!$route.meta.hideTabBar" />
    <loading></loading>
    <!-- 测试提交 -->
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import loading from "./components/loading/loading.vue";

</script>


<style scoped>
</style>