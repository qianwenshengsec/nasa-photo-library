<template>
  <div id="hamburger-btn">
    <div class="three-line" @click="changebtn">
      <span :class="{top:iswhether}"></span>
      <span :class="{center:iswhether}"></span>
      <span :class="{bottom:iswhether}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HamburgerBtn',
  data(){
    return {
    }
  },
  computed:{
    iswhether(){
      return this.$store.state.a.whethershow
    }
  },
  methods:{
    changebtn(){
      // 如果需要做判断或者异步任务，请dispatch到actions内
      // 否则直接commit到mutations内
      // 切记不要直接修改state
      this.$store.commit('a/changewhethershow')
    }
  }
}
</script>

<style lang="less" scoped>
#hamburger-btn{
  margin-left: 10px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .three-line span{
    background-color: rgb(255, 255, 255);
    width: 30px;
    height: 3px;
    display: block;
    transition: all 0.25s;
  }
  .three-line span:nth-child(2){
    margin-top: 10px;
    margin-bottom: 10px;
    height: 3px !important;
  }

  .top{
    transform: translateY(12.5px) rotateZ(45deg);
  }
  .bottom{
    transform: translateY(-12.5px) rotateZ(-45deg);
  }
  .center{
    opacity: 0;
  }
</style>