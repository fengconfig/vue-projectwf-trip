  <template>
    <div class="house-item">
      <div class="item-inner">
        <div class="cover">
          <img :src="houseInfo.image.url" alt="">
        </div>
        <div class="info">
          <div class="location">
            <img src="@/assets/img/home/location.png" alt="">
            <span>{{ houseInfo.location }}</span>
          </div>
          <div class="name">{{ houseInfo.houseName }}</div>
          <div class="summary">{{ houseInfo.summaryText }}</div>
          <div class="price">
            <div class="new">{{ "￥" + houseInfo.finalPrice }}</div>
            <div class="old">{{ "￥" + houseInfo.productPrice }}</div>
            <div class="tip">{{ houseInfo?.priceTipBadge?.text }}</div>
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
    margin: 5px;
    position: relative;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .cover {
      img {
        width: 100%;
        height: 115px;
        /* 设置固定高度 */
        object-fit: cover;
      }
    }

    .info {
      padding: 8px 10px;
      color: #333;

      .location {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }

        span {
          font-size: 12px;
          color: #999;
        }
      }

      .name {
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .summary {
        font-size: 12px;
        color: #999;
        margin: 5px 0;
      }

      .price {
        display: flex;
        align-items: baseline;
        margin-top: 5px;

        .new {
          font-size: 18px;
          color: #ff5722;
          margin-right: 5px;
        }

        .old {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
          margin-right: 5px;
        }

        .tip {
          font-size: 12px;
          color: #fff;
          background-color: #ff5722;
          padding: 2px 5px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>