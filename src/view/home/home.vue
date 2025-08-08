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
    <!-- 分类 -->
    <home-categories></home-categories>
    <div class="search-box" v-if="isShowSearchBox">
      <search-bar :start-date="startDateStr" :end-date="endDateStr" />
    </div>
    <!-- 热门推荐 -->
    <home-show-content></home-show-content>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';
import userMainStore from '@/stores/modules/main';
import homeCategories from './cpns/home-categories.vue';
import homeShowContent from './cpns/home-show-content.vue';
import scrollHook from '@/hooks/scrollHook';
import searchBar from '@/components/search-bar/search-bar.vue';
import { storeToRefs } from 'pinia';
import { formatMouthDay } from '@/utils/date_format';

// 发送网络请求获取热门搜索
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const mainStore = userMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMouthDay(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatMouthDay(endDate.value, 'MM.DD'))


// 监听滚动位置
const { isReachBottom, scrollTop } = scrollHook()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示控制
const isShowSearchBox = ref(false)
watch(scrollTop, (newValue) => {
  isShowSearchBox.value = newValue > 300
})

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 10px;

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .bannar {
    img {
      width: 100%;
    }
  }
}
</style>