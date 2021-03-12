<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
        message: '哈哈'
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll ? (-this.scroll.y) : 0 ;
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        PullUpLoad: this.pullUpLoad
      })

      // 监控位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position);
      })

      // 上拉加载更多
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })

    },

  }
</script>

<style scoped>

</style>
