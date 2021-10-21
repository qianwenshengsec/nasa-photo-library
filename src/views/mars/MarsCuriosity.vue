<template>
  <div id="mars-curiosity">
    
    <div
      class="prompt-box"
      :class="{ promptboxshow: isshow, success: issuccess }"
      @click="disappear"
    >
      {{ errMsg }}
    </div>

    <div class="left-curiosity-data">
      <ul>
        <li>好奇号火星车最新数据</li>
        <template v-for="(val,key,index) in  MarsCuriosityLatestData" :key="index">
          <li v-if="(typeof val !=='object')">{{key}} : {{val}}</li>
        </template>
      </ul>
    </div>

    <div class="right-curiosity-data">
      <label for="cameraid">camera 选择相机</label>

      <select name="" id="cameraid" v-model="camera">
        <option value="FHAZ">前置避障</option>
        <option value="RHAZ">后置避障</option>
        <option value="MAST">桅杆相机</option>
        <option value="CHEMCAM">化学分析</option>
        <option value="MAHLI">手臂镜头成像仪</option>
        <option value="MARDI">火星下降成像仪</option>
        <option value="NAVCAM">导航相机</option>
      </select>


      <label for="pageid">
        page  默认第一页 25张图像 设置过大可能无数据</label
      >
      <el-input-number v-model="page" :min="1" :max="100"  />

      <label for="solid">sol 火星车火星周期数 不得大于左侧max_sol</label>
      <!-- <input type="number" name="" v-model="sol" id="solid" /> -->
      <el-input-number v-model="sol" :min="1" :max="MarsCuriosityLatestData.max_sol" />
      <button @click="searchBysol">按火星日期检索</button>
      <label for="">地球日期 不得大于左侧max_date 也不能早于landing_date</label><br>
      <!-- <input type="text" name="" v-model="earth_date" id="" /> -->

      <div class="block block-p-2">
        <el-date-picker
          v-model="earth_date"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          size="small"
        >
        </el-date-picker>
        <span class="demonstration" style="color:white;"> 按地球日期选择</span>
      </div>

      <button @click="searchBydate">按地球日期检索</button>
    </div>
    <div class="canclickphoto_1" @click="show">👇点击图片全屏预览 自动播放</div>
    <div class="show-curiosity-data-box" v-viewer>
      <img :src="item.img_src" :alt="item.earth_date" v-for="item in CuriosityPhoto" :key="item.id">
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import { DEMO_KEY } from "../../apis/request";
import { getMarsCuriosity } from "../../apis/mars";
export default {
  name: "MarsCuriosity",
  data() {
    return {
      MarsCuriosityLatestData: {},
      sol: 562,
      camera: null || "MAST",
      page: null || 1,
      earth_date: '2012-08-20',
      CuriosityPhoto: [],
      isshow: false,
      errMsg: "",
      issuccess: false,
    };
  },
  computed: {},
  created() {
    getMarsCuriosity()
      .then(({ rover }) => {
        this.MarsCuriosityLatestData = rover;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.$nextTick(() => {
    });
  },
  methods: {
    disabledDate(time) {
        return time.getTime() > Date.now()
      },
    show () {
      const viewer = this.$el.querySelector('.show-curiosity-data-box').$viewer
      viewer.show()
      },
    disappear() {
      this.isshow = false;
    },
    searchBysol() {
      if (this.sol !== null && this.camera !== null && this.page !== null) {
        console.log("searchBysol...");
        this.$http({
          url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
          type: "get",
          params: {
            sol: this.sol,
            camera: this.camera,
            page: this.page,
            api_key: DEMO_KEY,
          },
        }).then(({ data }) => {
          console.log(data.photos);
          this.issuccess = true;
          this.isshow = true;
          this.errMsg = "检索成功😃";
          this.CuriosityPhoto = data.photos;
        });
      } else {
        this.errMsg = "检查日期sol是否填写 或page页数是否设置过大或小于1";
        this.isshow = true;
      }
    },
    searchBydate() {
      if (this.earth_date !== null && this.camera !== null && this.page !== null) {
        console.log("searchBydate...");
        this.$http({
          url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
          type: "get",
          params: {
            earth_date: this.earth_date,
            camera: this.camera,
            page: this.page,
            api_key: DEMO_KEY,
          },
        }).then(({ data }) => {
          console.log(data.photos);
          this.issuccess = true;
          this.isshow = true;
          this.errMsg = "检索成功😃";
          this.CuriosityPhoto = data.photos;
        });
      } else {
        this.errMsg = "检查日期地球日期是否填写 或page页数是否设置过大或小于1";
        this.isshow = true;
      }
    },
  },
  watch: {
    CuriosityPhoto: {
      deep: true,
      handler(newval, oldval) {
        if (newval.length == 0) {
          this.errMsg = "此相机在在这天没有数据 或page页数设置过大";
          this.isshow = true;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>

.canclickphoto_1{
  margin-top: 5px;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: #192a56;
}

.show-curiosity-data-box {
  margin-top: 5px;
}

.show-curiosity-data-box img{
  width: 20%;
  padding: 3px;
}

.prompt-box {
  width: 70%;
  height: 100px;
  background-color: tomato;
  display: flex;
  position: fixed;
  top: -100%;
  transition: all 0.5s;
  border-radius: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
}

.promptboxshow {
  top: 250px;
}

.success {
  background-color: #4cd137;
  z-index: 9000;
}

#mars-curiosity {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
}
.left-curiosity-data {
  width: 30%;
  background-color: #34495e;
  padding: 10px;
  display: flex;
}

.right-curiosity-data {
  width: 70%;
  background-color: #2c3e50;
  padding: 10px;
}
li {
  color: rgb(255, 255, 255);
}
.el-input-number{
  width: 100%;
  
}
select,

input[type="text"],
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
label {
  color: white;
}
.block-p-2{
  width: 100%;
}
</style>