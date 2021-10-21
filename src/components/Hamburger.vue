<template>
  <div id="hamburger">
    <!-- Home -->
    <router-link to="/home" class="firstrouter"> 🎈 </router-link>
    <!-- NavList -->
    <teleport to="body">
      <div class="navList" :class="{ navlistshow: iswhether }">
        <template v-for="item of routeList" :key="item.id">
          <li>
            <router-link :to="item.path">
              <svg
                :class="{ icon: true }"
                :aria-hidden="true"
                v-html="item.symbol"
              ></svg>
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </template>
        <li>
          <router-link to="/about">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
            <span>About</span>
          </router-link>
        </li>

        <li>
          <a href="https://gitee.com/qian-wensheng/static-nasa-vue">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
            <span>gitee</span>
          </a>
        </li>
        <!-- <li>
          <a href="">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bilibili4"></use>
            </svg>
            <span>null</span>
          </a>
        </li> -->
      </div>
    </teleport>
    <!-- HamburgerBtn -->
    <hamburger-btn class="hamburger-btn"></hamburger-btn>
  </div>
</template>

<script>
import HamburgerBtn from "./HamburgerBtn.vue";

export default {
  components: {
    HamburgerBtn,
  },
  name: "Hamburger",
  data() {
    return {
      routeList: this.$store.state.a.routeList,
      screenWidth: document.body.clientWidth,
    };
  },
  computed: {
    iswhether() {
      return this.$store.state.a.whethershow;
    },
  },
  mounted() {
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        setTimeout(() => {
          if (this.screenWidth <= 800) {
            this.$store.commit("a/changewhethershowTrue");
          } else {
            this.$store.commit("a/changewhethershowFalse");
          }
          this.timer = false;
        }, 15);
      }
    },
  },
};
</script>

<style scoped lang="less">
#hamburger {
  width: 100%;
  height: 50px;
  background-color: #000000;
  opacity: 0.8;
  position: fixed;
  // position: relative;
  z-index: 99999999;
  top: 0px;
  display: none;
}

.firstrouter {
  font-size: 30px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navList {
  display: block;
  position: fixed;
  right: -230px;
  top: 50px;
  background-color: #201e1e;
  opacity: 0.7;
  height: calc(100vh - 50px);
  transition: all 0.25s linear;
}
.navList li {
  list-style: none;
}
.navList li a {
  color: white;
  font-size: 18px;
  display: block;
  padding: 8px;
}

.navList li a:hover {
  background-color: #34495e;
}

@media screen and (max-width: 800px) {
  #hamburger {
    display: block;
  }
}

.hamburger-btn {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}

.navlistshow {
  right: 0px;
}
</style>