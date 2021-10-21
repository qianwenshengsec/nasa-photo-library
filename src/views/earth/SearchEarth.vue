<template>
  <div id="search-earth">
    <teleport to="body">
      <aside :class="{ alertaside: isalert }" @click="xiaoshi">
        {{ errMsg }}
      </aside>
    </teleport>
    <h5>三维地球加载稍慢 长时间不出现请使用Chrome</h5>
    <h5 class="typo">默认图像2021-09-09:Space Center Houston</h5>
    <!-- 经度 -->
    <hr />
    <label for="lon">输入经度</label>
    <input type="number" name="" v-model="lon" id="lon" />
    <!-- 纬度 -->
    <hr />
    <label for="lat">输入纬度</label>
    <input type="number" name="" v-model="lat" id="lat" />
    <!-- 日期 -->
    <hr />
    <label for="lat">输入日期</label>
    <input type="date" name="" v-model="onedate" id="onedate" />
    <hr />
    <label for="">图像残缺修改此数值 取值0.1-1之间,大于1也可以</label>
    <input type="number" name="" v-model="dim" id="dim" />
    <label for="" style="color:red;">直接返回二进制数据,耐心等待10秒+</label>
    <button @click="readySearch">加载图像</button>
    <hr />
  </div>
</template>

<script>
import yyyymmdd from "../../common/yyyymmdd";
import { DEMO_KEY } from "../../apis/request";
export default {
  name: "SearchEarth",
  data() {
    return {
      lon: -95.0972,
      lat: 29.55164,
      onedate: "2021-09-09" || yyyymmdd(),
      dim: 0.25,
      errMsg: "",
      isalert: false,
    };
  },
  created() {},
  methods: {
    disabledDate(time) {
      return time.getTime() > Date.now();
    },
    xiaoshi() {
      this.isalert = false;
    },
    readySearch() {
      this.errMsg = "开始请求图像10秒...";
      this.isalert = true;
      this.$http({
        url: "https://api.nasa.gov/planetary/earth/imagery",
        type: "get",
        params: {
          api_key: DEMO_KEY,
          // 维度
          lat: this.lat,
          // 经度
          lon: this.lon,
          // 日期
          date: this.onedate,
          // 图片大小 单位degrees
          dim: this.dim,
        },
        responseType: "arraybuffer",
      })
        .then((res) => {
          console.log(res.data, "返回Buffer...");
          this.errMsg = ''
          this.$store.commit("c/updateEarthBuffer", res.data);
          clearInterval(this.t_1000)
          this.errMsg = "Buffer to base64";
          this.isalert = true;
          let t5 = setTimeout(() => {
            this.isalert = false;
          }, 2500);
          t5 = null;
        })
        .catch((err) => {
          this.errMsg = "数据库无数据 更改日期 或经纬";
          this.isalert = true;
          console.log(err);
        });
    },
  },
  mounted() {
    this.subId = this.$pubsub.subscribe("sendlocation", (newsName, data) => {
      this.lon = data[0];
      this.lat = data[1];
    });
  },
  beforeDestory() {
    this.$pubsub.unsubscribe(subId);
  },
};
</script>

<style lang="less" scoped>
input[type="date"],
input[type="number"] {
  width: 100%;
  padding: 5px 20px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 5px 20px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
aside {
  position: fixed;
  width: 150px;
  height: 80px;
  background-color: #55e6c1;
  border-radius: 10px;
  left: 79.1%;
  top: -50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
}
// .block,
// .block-p-2{
//   width: 100px !important;
// }

.alertaside {
  top: 35%;
}
</style>