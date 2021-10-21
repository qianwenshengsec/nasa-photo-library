<template>
  <div id="mars">
    <ul id="marsul">
      <li v-for="tab in tabs" :key="tab" @click="currentTab = tab">👉{{ tab }}</li>
    </ul>
    <keep-alive>
      <component :is="currentTab"> </component>
    </keep-alive>
  </div>
</template>

<script>
import MarsCuriosity from "./MarsCuriosity.vue";
import MarsOpportunity from "./MarsOpportunity.vue";
import MarsSpirit from "./MarsSpirit.vue";
export default {
  name: "Mars",
  components: {
    MarsCuriosity,
    MarsOpportunity,
    MarsSpirit,
  },
  data() {
    return {
      currentTab: "MarsCuriosity",
      tabs: ["MarsCuriosity", "MarsOpportunity", "MarsSpirit"],
    };
  },
  computed: {},
};
</script>

<style lang="less" scoped>

#mars {
  padding: 20px;
  padding-top: 10px;
}
ul {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  height: 50px;
  background-color: #1abc9c;
  color: white;
  font-size: 25px;
  line-height: 50px;
  display: block;
  width: 33.3%;
  text-align: center;
}
li:nth-child(1){
  background-color: #34495e;
}
li:nth-child(2){
  background-color: #ff5252;
}
li:hover {
  background-color: #16a085;
}
@media screen and(max-width:800px) {
  li{
    font-size: 18px;
    line-height: 40px;
    height: 40px;
  }
  ul{
    height: 40px;
  }
}
@media screen and(max-width:550px) {
  li{
    font-size: 12px;
    height: 35px;
    line-height: 35px;
  }
  ul{
    height: 35px;
  }
}
</style>