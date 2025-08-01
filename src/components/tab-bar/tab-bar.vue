<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData" :key="index">
            <div 
              class="tab-bar-item" 
              @click="itemClick(index, item)" 
              :class="{active: currentIndex === index}"
            >
                <img v-if="currentIndex === index" :src="getAssetsUrl(item.image)" alt="">
                <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/data/tabbar.js';
    import { getAssetsUrl } from '@/utils/load_assets.js'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const currentIndex = ref(0)

    const router = useRouter()

    const itemClick = (index, item) => {
      currentIndex.value = index
      router.push(item.path)
    }
    
    
</script>

<style lang="less" scoped>
    .tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        display: flex;

        border-top: 1px solid #f3f3f3;
    }

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.active {
        color: var(--primary-color);
    }

    .text {
        font-size: 12px;
    }

    img {
        width: 24px;
        margin-bottom: 3px;
    }

    
</style>