<template>
  <div class="app">
    <!-- 路由占位 -->
    <router-view />
    <!-- 底部导航栏 -->
    <tab-bar v-if="!$route.meta.hideTabBar" />
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"


</script>


<style scoped>
</style>