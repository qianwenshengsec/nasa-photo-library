<template>
    <div class="top-background-image-container" ref="tbic">
    <img ref="img" :src="basesrc" alt="" style="height: 100%;" class="bgimg">
  </div>
</template>

<script>
import earthpic from '../assets/images/earth_banner.png'
import epicpic from '../assets/images/epic_banner.png'
import aboutpic from '../assets/images/galleries-banner.png'
import apodpic from '../assets/images/hubble_banner.png'
import librarypic from '../assets/images/history_banner.png'
import asteroidspic from '../assets/images/solar_banner.png'
import marspic from '../assets/images/mars_banner.png'
import galleriespic from '../assets/images/human_banner.png'
export default {
  name:'TopBackground',
  data(){
    return {
      basesrc:marspic
    }
  },
  computed:{
    
  },
  mounted(){
    // var box = this.$refs.tbic
    // var img = this.$refs.img
    // box.addEventListener('mouseenter', function (e) {
    //   this.x = e.clientX
    //   img.style.transition = 'none'
    // })
    // box.addEventListener('mousemove', function (e) {
    //   this._x = e.clientX
    //   const disx = this._x - this.x
    //   const move = 15 - disx / -30
    //   img.style.transform = `translate(${move}px)`
    // })
    // box.addEventListener('mouseleave', function (e) {
    //   img.style.transition = .3 + 's'
    //   img.style.transform = 'translate(15px)'
    // })
  },
  watch:{
    $route(newval,oldval){
      console.log(newval,oldval)
      switch (newval.fullPath){
        case '/mars':
          this.basesrc = marspic;
          break;
        case '/earth':
          this.basesrc = earthpic
          break;
        case '/apod':
          this.basesrc = apodpic
          break;
        case '/asteroids':
          this.basesrc = asteroidspic
          break;
        case '/about':
          this.basesrc = aboutpic
          break;
        case '/library':
          this.basesrc = librarypic
          break;
        case '/epic':
          this.basesrc = epicpic;
          break;
        case '/home':
          this.basesrc = galleriespic
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top-background-image-container {
      // background-color: blue;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    @media only screen and (max-width: 800px) {
      .top-background-image-container {
        display: none;
      }
    }

.bgimg{
  transition: all 1s;
}
</style>