<template>
  <div id="search-input">
    <teleport to="body">
      <aside :class="{ err: isTrue, success: iscolor }">
        <span class="iknow" @click="changeisTrue"
          ><strong>{{ errMsg }}</strong></span
        >
      </aside>
    </teleport>
    <h3 style="color: white">Near Earth Object Web Service</h3>

    <div class="block-cus">
      <el-date-picker
        v-model="start"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        size="medium"
      >
      </el-date-picker>
      &nbsp;
      <span class="demonstration">选择日期 返回指定日期之后七天接近地球的小天体数据</span>
    </div>

    <button class="submit" @click="readygo">Ready Go</button>
  </div>
</template>


<script>
import { DEMO_KEY } from "../../apis/request";
export default {
  name: "SearchInput",
  data() {
    return {
      start: "",
      end: "",
      isTrue: false,
      errMsg: "",
      iscolor: false,
      isroute: false,
    };
  },
  methods: {
    readygo() {
      let that = this;
      if (this.start == "") {
        this.errMsg = "📆请输入日期";
        this.isTrue = true;
        return;
      }
      this.isroute = true;
      this.errMsg = "发起请求🤝等待...";
      this.iscolor = true;
      this.$http({
        url: `https://api.nasa.gov/neo/rest/v1/feed`,
        type: "post",
        params: {
          start_date: this.start,
          // end_date: '2021-10-07',
          api_key: DEMO_KEY,
        },
      })
        .then((res) => {
          console.log(res);
          that.errMsg = `请求数据成功`;
          this.isTrue = true;
          that.$store.commit("b/changeAsteroidsData", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeisTrue() {
      this.isTrue = false;
      this.iscolor = false;
    },
  },
  computed: {
    vuexAsteroidsDatachaneg() {
      return this.$store.state.b.AsteroidsData;
    },
  },
  watch: {
    vuexAsteroidsDatachaneg: {
      deep: true,
      handler(nval, oval) {
        this.errMsg = "😃数据更新成功";
        this.isroute = false;
      },
    },
  },
};
</script>

<style lang="less" scoped>



.demonstration{
  color: rgb(0, 0, 0) !important;
}

#search-input {
  background-color: #574b90;
}

h3{
  margin-bottom: 10px;
}

button {
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 5px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.submit_null {
  background-color: slateblue;
  border-radius: 0px;
  height: 60px;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
aside {
  display: block;
  position: fixed;
  top: -100%;
  width: 50%;
  height: 130px;
  border-radius: 10px;
  opacity: 0.9;
  color: white;
  transition: all 0.5s;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: tomato;
}
.iknow {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  // text-align: center;
}

.iknow strong {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}
.err {
  top: 200px;
}

.success {
  top: 200px;
  background-color: #2ecc71;
}

i {
  // display: block;
  display: inline-block;
  font-size: 20px;
  transition: all 30s linear;
  font-style: initial;
}
</style>