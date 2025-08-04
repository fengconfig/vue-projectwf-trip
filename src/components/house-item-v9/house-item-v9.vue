  <template>
    <div class="house-item">
      <div class="item-inner">
        <div class="cover">
          <img :src="houseInfo.image.url" alt="">
        </div>
        <div class="info">
          <div class="summary">{{ houseInfo.summaryText }}</div>
          <div class="name">{{ houseInfo.houseName }}</div>
          <div class="price">
            <van-rate :model-value="itemScore" :size="15" color="#fff" readonly allow-half></van-rate>
            <span class="new">{{ "￥" + houseInfo.finalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  houseInfo: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.houseInfo.commentScore)
})

</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .price { 
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>