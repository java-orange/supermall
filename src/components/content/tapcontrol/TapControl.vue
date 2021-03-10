<template>
  <div class="tap-control">
    <div v-for="(item, index) in title"
         class="tap-control-item"
         @click="itemClick(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TapControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      },
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>

  .tap-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    box-shadow: 1px 1px 1px rgba(100,100,100,.05);
    background-color: #fff;
    /*粘性定位*/
    position: sticky;
    top: 44px;
  }

  .tap-control-item {
    flex: 1;

  }
  .tap-control-item span {
    padding: 7px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);

  }

</style>
