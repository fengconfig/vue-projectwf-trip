<template>
  <div class="categories">
    <div class="item" v-for="(category, index) in categories" :key="index">
      <img :src="category.pictureUrl" alt="Category Image">
      <p class="title">{{ category.title }}</p>
    </div>
  </div>
</template>

<script setup>
import userHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = userHomeStore();
const { categories } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>

.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .title {
      font-size: 12px;
      color: #333;
      margin-top: 8px;
    }
  }
}
</style>