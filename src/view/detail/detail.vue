<template>
  <div class="detail top-page">
    <van-nav-bar 
      title="房屋详情" 
      left-text="旅途" 
      left-arrow 
      @click-left="onClickLeft" 
    />
    
    <div v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDetailData } from '@/services'

import detailSwipe from './cpns/detail-swipe.vue'

const router = useRouter()
const route = useRoute()

const houseId = route.params.id

const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)

getDetailData(houseId).then(res => {
  detailInfos.value = res.data
})


const onClickLeft = () => {
  router.back()
}

</script>

<style lang="less" scoped></style>