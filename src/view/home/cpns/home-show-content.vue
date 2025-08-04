<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <house-item-v-3 v-if="item.discoveryContentType === 3" :houseInfo="item.data"></house-item-v-3>
        <house-item-v-9 v-else-if="item.discoveryContentType === 9" :houseInfo="item.data"></house-item-v-9>
      </template>
    </div>
  </div>
</template>

<script setup>
import userHomeStore from '@/stores/modules/home';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';

const homeStore = userHomeStore();
const { houseList } = homeStore;

</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 18px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>