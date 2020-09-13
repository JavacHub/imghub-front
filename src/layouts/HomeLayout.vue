<template>
  <a-layout>
    <a-layout-header class="indexHeader"><span>我是 header</span></a-layout-header>
    <a-layout-content><router-view /></a-layout-content>
    <a-layout-footer class="indexFooter"> 我是 footer</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
    }
  },
}
</script>

<style lang="less">
@import "./HomeLayout.less";
.indexHeader{
  color: aliceblue;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
}
.indexFooter{
  color:blueviolet;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
}
</style>
