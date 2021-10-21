<template>
  <div id="date-input">
    <teleport to="body">
      <aside :class="{ err: isTrue, success: iscolor }">
        <span class="iknow" @click="changeisTrue"
          ><strong>{{ errMsg }}</strong></span
        >
      </aside>
    </teleport>
    <h3 style="color: white">Astronomy Picture of the Day</h3>
    <div class="block block-cus">
      <el-date-picker
        v-model="start"
        type="date"
        placeholder="Pick a start day"
        :shortcuts="shortcuts"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        size="medium"
      >
      </el-date-picker>
      <span class="demonstration"> 开始日期</span>
      &nbsp;
    <!-- </div> -->

    <!-- <div class="block"> -->
      <el-date-picker
        v-model="end"
        type="date"
        placeholder="Pick a end day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        size="medium"
      >
      </el-date-picker>
      <span class="demonstration"> 结束日期</span>
    </div>

    <button class="submit" @click="intervalDate">开始检索🔍</button>
    <button class="submit_null" @click="show">
      点击图片预览
    </button>
  </div>
</template>


<script>
export default {
  name: "DateInput",
  data() {
    return {
      start: "",
      end: "",
      isTrue: false,
      errMsg: "",
      iscolor: false,
    };
  },
  computed: {
    
  },
  methods: {
    disabledDate(time) {
        return time.getTime() > Date.now()
      },
    show() {
      const viewer = this.$parent.$refs.shellref.$viewer;
      viewer.show();
    },

    intervalDate() {
      let startNum = parseInt(this.start.replace("-", "").replace("-", ""));
      let endNum = parseInt(this.end.replace("-", "").replace("-", ""));
      if (this.start == "" || this.end == "") {
        this.errMsg = "请输入开始或结束日期🙄";
        this.isTrue = true;
      }
      if (this.start !== "" && this.end !== "") {
        if (startNum > endNum) {
          this.isTrue = true;
          this.errMsg = "开始日期要早于结束日期🙄";
        } else {
          this.errMsg = "输入成功 开始检索🤝";
          this.iscolor = true;
          this.$store.commit("a/changevuexdate", [this.start, this.end]);
          let t1 = setTimeout(() => {
            this.isTrue = false;
            this.iscolor = false;
          }, 2500);
          t1 = null;
        }
      }
    },
    changeisTrue() {
      this.isTrue = false;
      this.iscolor = false;
    },
  },
};
</script>

<style lang="less" scoped>

.demonstration{
  color: rgb(0, 0, 0) !important;
}
.block-cus{
  margin-top: 5px;
}
button {
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 5px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.submit_null {
  background-color: slateblue;
  border-radius: 5px;
  height: 40px;
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
#date-input {
  background-color: #43596e;
}
label {
  color: white;
}
</style>