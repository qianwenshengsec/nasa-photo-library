<template>
  <div id="top-navigation-bar">
    <ul>
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

      <secondary-menu></secondary-menu>
    </ul>
  </div>
</template>

<script>
import SecondaryMenu from "./SecondaryMenu.vue";
export default {
  components: {
    SecondaryMenu,
  },
  Name: "TopNavigationBar",
  data() {
    return {
      routeList: this.$store.state.a.routeList,
    };
  },
};
</script>

<style lang="less" scoped>
#top-navigation-bar {
  position: sticky;
  top: 0;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* overflow: hidden; */
  background-color: #050708;
  opacity: 0.8;
}

ul li {
  display: block;
  float: left;
  text-align: center;
  height: 50px;
}

ul li a {
  /*跟随父元素的高度*/
  height: inherit;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
}

ul li:hover{
  background-color: rgb(255, 255, 255);
}
ul li:hover span{
  color: black;
}

@media screen and (max-width: 800px) {
  #top-navigation-bar {
    display: none;
  }
}
</style>