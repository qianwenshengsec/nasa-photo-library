<template>
  <div id="earth">
    <div class="leftbox" v-viewer>
      <baidu-map class="baidumapbox"></baidu-map>
      点击图片全屏预览
      <img src="" alt="" ref="imgbox" />
    </div>
    <div class="rightbox">
      <search-earth></search-earth>
    </div>
  </div>
</template>

<script>
import { arrayBufferToBase64 } from "../../common/arrayBufferToBase64";
import SearchEarth from "./SearchEarth.vue";
import BaiduMap from "./BaiduMap.vue";
import { getEarth } from "../../apis/earth";
export default {
  data() {
    return {};
  },
  components: {
    BaiduMap,
    SearchEarth,
  },
  name: "Earth",
  created() {
    getEarth()
      .then((res) => {
        this.$store.commit("c/updateEarthBuffer", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.$nextTick(() => {});
  },

  computed: {
    vuexEarthBufferData() {
      return this.$store.state.c.EarthBuffer;
    },
  },
  watch: {
    vuexEarthBufferData(val) {
      let url = arrayBufferToBase64(val);
      this.$refs.imgbox.src = "data:image/jpeg;base64," + url;
    },
  },
};
</script>

<style lang="less" scoped>
#earth {
  padding: 20px;
  // float: left;
}
.leftbox {
  // display: inline-block;
  float: left;
  width: 50%;
  padding-top: 20px;
  padding-right: 10px;
  // border-right: 1px solid black;
}
.rightbox {
  // display: inline-block;
  float: right;
  width: 50%;
  border-left: 1px solid rgb(108, 106, 106);
  padding-top: 20px;
  padding-left: 9px;
}
img {
  width: 100%;
}
</style>