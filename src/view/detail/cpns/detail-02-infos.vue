<template>

  <div class="detail-infos">
    <div class="name">{{ topModule.houseName }}</div>
    <div class="tags">
      <template v-for="(tag, index) in topModule.houseTags" :key="index">
        <span class="tag" v-if="tag.tagText"
          :style="{ color: tag.tagText?.color, backgroundColor: tag.tagText?.background?.color }">
          {{ tag.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <div class="score">{{ topModule.commentBrief.overall }}</div>
        <div class="title">{{ topModule.commentBrief.scoreTitle }}</div>
        <div class="brief">{{ topModule.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        {{ topModule.commentBrief.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position extra">
      <div class="left address">
        {{ topModule.nearByPosition.address }}
      </div>
      <div class="right">地图·周边 <van-icon name="arrow" /></div>
    </div>
  </div>

</template>

<script setup>

defineProps({
  topModule: Object,
  default: () => { }
})

</script>

<style lang="less" scoped>
.detail-infos {
  padding: 16px;
  background-color: #fff;
}

.name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-align: justify;
}

.tags {
  gap: 5px;
  margin-bottom: 10px;
}

.tag {
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
}

.extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  margin: 12px;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f5f7fa;

  .right {
    color: #ff9645;
  }
}

.comment {
  .left { 
    display: flex;
    align-items: center;
  }
  .score {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .title {
    color: #333;
    font-weight: 700;
    margin: 0 3px;
  }

  .brief {
    font-size: 12px;
    color: #999;
  }
}

.position {
  .address {
    font-size: 14px;
    color: #333;
    font-weight: 700;
  }
}
</style>