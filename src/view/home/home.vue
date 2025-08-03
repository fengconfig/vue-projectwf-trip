<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <home-nav-bar></home-nav-bar>
    <!-- 轮播图 -->
    <div class="bannar">
      <img src="@/assets/img/home/bannar.png" alt="">
    </div>
    <!-- 搜索框架 -->
    <home-search-box></home-search-box>
    home
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';

// 发送网络请求获取热门搜索
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()

</script>

<style lang="less" scoped>
.home {
  .bannar {
    img {
      width: 100%;
    }
  }
}
</style>