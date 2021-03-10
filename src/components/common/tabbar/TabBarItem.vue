<template>
  <div @click="itemClick" class="tabbar-item">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return{}
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path).catch(err => {})
      }
    },
    computed: {
      isActive() {
        return !this.$route.path.indexOf(this.path);
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>

  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }


</style>