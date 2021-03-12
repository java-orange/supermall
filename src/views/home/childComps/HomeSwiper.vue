<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad = true;
        }
      }
    }


  }
</script>

<style scoped>

</style>
