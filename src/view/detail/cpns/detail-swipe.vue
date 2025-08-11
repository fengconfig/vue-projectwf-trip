<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.albumUrl" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getName(value[0].title)}}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
  swipeData: Array,
  default: () => []
})

const swipeGroup = {}

for (const item of props.swipeData) {
  let swipeArray = swipeGroup[item.enumPictureCategory]
  if(!swipeArray) {
    swipeArray = []
    swipeGroup[item.enumPictureCategory] = swipeArray
  }
  swipeArray.push(item)
}

console.log(swipeGroup);

const rex = /【(.*?)】：/i
const getName = (name) => { 
  return rex.exec(name)[1]
}

const getCategoryIndex = (item) => {
  let swipeArray = swipeGroup[item.enumPictureCategory]
  return swipeArray.findIndex(swipe => item === swipe) + 1
}


</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
        height: 220px;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.5);
      color: white;;

      .item {
        margin: 0 5px;

        &.active {
          background: white;
          color: #333; 
          border-radius: 5px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>