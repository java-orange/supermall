<template>
  <div id="cart">
    <h2>购物车</h2>
    <scroll class="content">
      <ul>
        <li>购物车1</li>
        <li>购物车2</li>
        <li>购物车3</li>
        <li>购物车4</li>
        <li>购物车5</li>
        <li>购物车6</li>
        <li>购物车7</li>
        <li>购物车8</li>
        <li>购物车9</li>
        <li>购物车10</li>
        <li>购物车11</li>
        <li>购物车12</li>
        <li>购物车13</li>
        <li>购物车14</li>
        <li>购物车15</li>
        <li>购物车16</li>
        <li>购物车17</li>
        <li>购物车18</li>
        <li>购物车19</li>
        <li>购物车20</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Cart",
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  #cart {
    padding-top: 44px;
  }

  .content {
    height: 100px;
  }
</style>
