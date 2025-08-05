<template>
  <div class="search-box">
    <!-- 选择位置 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity?.cityName ? currentCity.cityName : '选择城市' }}</div>
      <div class="pisition" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/position.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span>入住</span>
          <span>{{ startDateStr }}</span>
        </div>
      </div>
      <!-- 根据日期范围动态显示 -->
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <span>离店</span>
          <span>{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <!-- 日期选择器 -->
    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" type="range" />

    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门搜索 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggest" :key="index">
        <div class="item" :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">{{
          item.tagText.text }}</div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick()">搜索</div>
    </div>

  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMouthDay, getDiffDays } from '@/utils/date_format';
import { computed, ref } from 'vue';
import userHomeStore from '@/stores/modules/home';
import userMainStore from '@/stores/modules/main';

const router = useRouter()

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功", res);
  }, err => {
    console.log("获取位置失败", err);
  })
}

const cityClick = () => {
  router.push('/city')
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期选择
const mainStore = userMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMouthDay(startDate.value))
const endDateStr = computed(() => formatMouthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  showCalendar.value = false
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
}

// 热门搜索
const homeStore = userHomeStore()
const { hotSuggest } = storeToRefs(homeStore)

// 搜索按钮点击事件
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDateStr.value,
      endDate: endDateStr.value
    }
  })
}

</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 10px;

  .city {
    flex: 1;
  }

  .pisition {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 20px;
    }
  }
}

.section.date-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #333;
  /* 添加底部边框 */
}

.start,
.end {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date span:first-child {
  font-size: 14px;
  color: #666;
}

.date span:last-child {
  font-size: 18px;
  margin-top: 5px;
}

.stay {
  font-size: 16px;
  text-align: center;
}

.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.price-counter .start,
.price-counter .end {
  font-size: 16px;
  color: #999;
}

.keyword {
  font-size: 16px;
  color: #999;
}

.bottom-gray-line {
  margin-bottom: 10px;
  /* 调整与下一个元素的距离 */
}

.hot-suggest {
  flex-wrap: wrap;
  /* 子元素之间的间距 */

  .item {
    font-size: 10px;
    color: #333;
    padding: 4px 8px;
    margin: 4px;
    border-radius: 10px;
    background-color: #fff;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--tjc-theme-linear-gradient, linear-gradient(90deg, #fa8c1d, #fcaf3f));
  }
}
</style>