<template>
<teleport to="body">
  <div id="back-top" @click="backTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-meiguoaboluo"></use>
    </svg>
    <!-- <span style="color:red;background:yellow;">
    回到顶部
    </span> -->
  </div>
  </teleport>
</template>

<script>
import $ from 'jquery'
export default {
  name: "BackTop",
  methods: {
    backTop() {
      $('html, body').animate({scrollTop:0}, 400);
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  font-size: 40px;
}
#back-top{
  position: fixed;
  right: 20px;
  bottom: 45px;
}
</style>