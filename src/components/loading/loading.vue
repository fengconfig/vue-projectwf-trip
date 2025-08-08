<template>
  <div class="loading" @click="loadingClick()" v-if="mainStore.isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import userMainStore from "@/stores/modules/main";

const mainStore = userMainStore()

const loadingClick = () => {
  mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
.loading {
  display: flex;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);

  img {
    height: 30px;
    width: 30px;
  }
}
</style>