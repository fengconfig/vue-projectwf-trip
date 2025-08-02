<template>
    <div class="tab-bar">
      <van-tabbar v-model="currentIndex">
        <template v-for="(item, index) in tabbarData" :key = index>
          <van-tabbar-item :to="item.path">
            <span>{{ item.text }}</span>
            <template #icon>
              <img v-if="currentIndex === index" :src="getAssetsUrl(item.image)" alt="">
              <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
            </template>
          </van-tabbar-item>
        </template>
      </van-tabbar>
        <!-- <template v-for="(item, index) in tabbarData" :key="index">
            <div 
              class="tab-bar-item" 
              @click="itemClick(index, item)" 
              :class="{active: currentIndex === index}"
            >
                <img v-if="currentIndex === index" :src="getAssetsUrl(item.image)" alt="">
                <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template> -->
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/data/tabbar.js';
    import { getAssetsUrl } from '@/utils/load_assets.js'
    import { ref } from 'vue';

    const currentIndex = ref(0)
    
</script>

<style lang="less" scoped>
    .tab-bar {
      img {
        height: 25px;
      }
    }


    
</style>