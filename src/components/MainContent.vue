<template>
<div id="main-content">
  <slot></slot>
</div>
</template>

<script>
export default {
  name:'MainContent'
}
</script>

<style scoped lang="less">
  #main-content{
    background-color: #ecf0f1;
  }
  @media screen and(max-width:800px) {
      #main-content{
        margin-top: 50px;
      }
  }
</style>