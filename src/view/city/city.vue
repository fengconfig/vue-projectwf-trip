<template>
  <div class="city top-page">
    <div class="top">
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        :show-action="true"
        shape="round"
        @cancel="cancelClick"
      />

      <van-tabs v-model:active="tabActive" color="#333333" line-height="2px">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :groupData="value" />
      </template>
    </div> 
     
  </div>
    
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

import cityGroup from './cpns/city-group.vue';

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab的切换
const tabActive = ref()

// 获取城市数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取当前选中的城市组
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style> 