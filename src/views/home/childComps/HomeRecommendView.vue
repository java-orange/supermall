<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }

</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 10px 0 15px 0;
    border-bottom: 8px solid #f6f6f6;

  }
  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }

</style>
