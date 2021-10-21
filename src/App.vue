<template>
  <div>
    <hamburger></hamburger>
    <top-background></top-background>
    <top-navigation-bar></top-navigation-bar>
    <top-box></top-box>
    <main-content>
        <router-view></router-view>
    </main-content>
    <footer-msg></footer-msg>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "./components/BackTop.vue";
import TopBox from "./components/TopBox.vue";
import MainContent from "./components/MainContent.vue";
import Hamburger from "./components/Hamburger.vue";
import TopNavigationBar from "components/TopNavigationBar.vue";
import TopBackground from "components/TopBackground.vue";
import FooterMsg from "./components/FooterMsg.vue";

export default {
  name: "App",
  components: {
    TopNavigationBar,
    TopBackground,
    FooterMsg,
    Hamburger,
    MainContent,
    TopBox,
    BackTop,
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
@import "assets/css/typo.css";
a {
  text-decoration: none !important;;
}
.anchorBL{
   	 display:none;
}
</style>
