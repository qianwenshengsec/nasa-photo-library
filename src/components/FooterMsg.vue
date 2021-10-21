<template>
  <div id="footer-msg">
    <div class="footer">
      <ul>
        <li><a href="https://gitee.com/qian-wensheng">&copy;static-nasa-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'FooterMsg'
}
</script>

<style lang="less" scoped>
  .footer{
    height: 45px;
    width: 100%;
    background-color: #4a5560;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: fixed;
    position: relative;
    bottom: 0;
  }
  ul li {
    display: inline-block;
    padding: 1px 5px;
  }
</style>