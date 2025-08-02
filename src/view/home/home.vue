<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="bannar">
      <img src="@/assets/img/home/bannar.png" alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="pisition">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/position.png" alt="">
      </div>
    </div>
    home
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
</script>

<style lang="less" scoped>
.home {
  .bannar {
    img {
      width: 100%;
    }
  }

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
}
</style>