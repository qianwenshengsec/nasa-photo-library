<template>
  <div id="baidu-map">
    点击 地球 获取点击位置的经纬度 或手动输入<br>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: "BaiduMap",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let that = this;
    this.$nextTick(function () {
      var map = new BMapGL.Map("container"); // 创建地图实例
      var point = new BMapGL.Point(-95.0972, 29.55164); // 创建点坐标
      map.centerAndZoom(point, 4); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      // map.setHeading(64.5);   //设置地图旋转角度
      // map.setTilt(73);       //设置地图的倾斜角度
      map.setMapType(BMAP_EARTH_MAP); // 设置地图类型为地球模式
      map.setMapStyleV2({
        styleId: "544943b706c42975cd01a8e7e1f5ccbe",
      });
      map.addEventListener("click", function (e) {
        alert("点击的经纬度：" + e.latlng.lng + ", " + e.latlng.lat);
        that.$pubsub.publish("sendlocation", [e.latlng.lng, e.latlng.lat]);
        // var mercator = map.lnglatToMercator(e.latlng.lng, e.latlng.lat);
        // alert('点的墨卡托坐标：' + mercator[0] + ', ' + mercator[1]);
      });
    });
  },
};
</script>

<style lang="less" scoped>
#container {
  height: 300px;
  width: 100%;
  padding-top: 10px;
}
</style>