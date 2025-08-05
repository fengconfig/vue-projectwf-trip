<template>
  <div class="search-bar">
    <!-- 左边的日期选择器 -->
    <div class="date-picker-container">
      <div class="date-picker">
        <span>住</span>
        <input type="text" readonly :value="startDate" />
      </div>

      <div class="date-picker">
        <span>离</span>
        <input type="text" readonly :value="endDate" />
      </div>
    </div>

    <!-- 右边的搜索框 -->
    <div class="search-container">
      <input type="text" placeholder="关键字/位置/民宿" />
      <button @click="handleSearch">
        <img src="../../assets/img/search-bar/search-icon.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  startDate: {
    type: String,
    default: '08-01'
  },
  endDate: {
    type: String,
    default: '08-02'
  }
});


const handleSearch = () => {
  console.log('Search query:');
};
</script>

<style scoped>
.search-bar {
  margin-top: 1px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  height: 30px;
}

.date-picker-container {
  display: flex;
  flex-direction: column;
  margin-right: 10px;

}

.date-picker {
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  /* 浅灰色背景 */
  padding: 5px;
  border-radius: 3px;
  font-size: 8px;
  /* 调整字体大小 */

}

.date-picker:last-child {
  margin-bottom: 0;
}

.date-picker span {
  margin-right: 5px;
  font-size: 10px;
  /* 调整字体大小 */
}

.date-picker input {
  border: none;
  background-color: transparent;
  font-size: 10px;
  /* 调整字体大小 */
  color: #666;
  padding: 0;
  /* 移除内边距 */
  width: 30px;
}

.search-container {
  flex: 1;
  display: flex;
  align-items: center;
}

.search-container input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #f9f9f9;
  /* 浅灰色背景 */
  font-size: 14px;
  /* 调整字体大小 */
}

.search-container button {
  padding: 10px 20px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: white;
  cursor: pointer;
}

.search-container button {
  font-size: 18px;
  color: #007bff;
}

.search-container button:hover {
  color: #0056b3;
}

img {
  width: 20px;
}
</style>