<template>
  <div id="library">
    <div class="alertbox" :class="{ alertboxshow: isshow }">
      {{ errMsg }}
    </div>
    <div class="play-box">
      <strong style="color: red"
        >输入英文关键字 你可以查询任何与太空科技相关的图像;</strong
      >
      <strong style="color: red"
        >人名 地名 国家名 飞船 卫星 太阳 火星 阿波罗 什么都可以搜
        注:多关键字的信息 请用空格隔开</strong
      >
      <br />
      <label for="que">
        例如 Elon Musk、 sun、moon、Donald Trump、China American 
        apollo、apollo landing、moon landing、 mars landing、
        Spirit rover、 Curiosity、 Houston、 Washington、 And so on ...
      </label>
      <strong style="color: red"></strong>
      <el-input v-model="querystr" placeholder="" clearable />
      <button class="btn1" @click="clickbtn">点击搜索</button>
    </div>

    <button class="btn2" @click="clearphoto">清空</button>
    <div class="imgcontainer">
      <div class="shell" v-viewer>
        <template v-for="(datax, index) of database" :key="index">
          <div class="image">
            <img :src="datax.links[0].href" alt="" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Library",
  data() {
    return {
      querystr: "Trump",
      media_typex: "image",
      isshow: false,
      errMsg: "",
      baseurl: "https://images-api.nasa.gov/search",
      database: [],
    };
  },
  created() {},
  mounted() {
    this.$http({
      url: this.baseurl,
      type: "get",
      params: {
        q: 'Trump',
        media_type: this.media_typex,
      },
    })
      .then(({ data }) => {
        this.database = data.collection.items;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    clearphoto() {
      this.database = [];
    },
    clickbtn() {
      let that = this;
      this.errMsg = "开始搜索";
      this.isshow = true;
      this.$http({
        url: this.baseurl,
        type: "get",
        params: {
          q: this.querystr,
          media_type: this.media_typex,
        },
      })
        .then(({ data }) => {
          this.database = data.collection.items;
        })
        .catch((err) => {
          console.log(err);
        });
      this.t6 = setTimeout(() => {
        this.isshow = false;
      }, 2000);
    },
  },
  beforeUnmount() {
    this.t6 = null;
  },
};
</script>

<style lang="less" scoped>
label {
  color: white;
}
.play-box {
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: #2c2c54;
}
.imgcontainer {
  display: flex;
  justify-content: center;
  padding: 10px 1px;
  padding-bottom: 150px;
}

.shell {
  max-width: 1300px;
  column-count: 5;
  column-gap: 10px;
}

.image {
  margin-bottom: 10px;
}

.image img,
.image video {
  width: 100%;
}
@media (max-width: 1200px) {
  .shell {
    column-count: 4;
  }
}
@media (max-width: 850px) {
  .shell {
    column-count: 3;
  }
}
@media (max-width: 700px) {
  .shell {
    column-count: 2;
  }
}
@media (max-width: 550px) {
  .shell {
    column-count: 1;
  }
}
ul li {
  list-style: outside;
}
p {
  color: black;
  font-size: 20px;
  display: block;
  position: absolute;
  top: 10%;
}
#library {
  padding: 20px;
  background-color: #40407a;
  // color: white;
}

.btn1 {
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  border: none;
  height: 40px;
  border-radius: 5px;
  background-color: #85ce61;
}

.btn2 {
  margin-top: 8px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  border: none;
  height: 40px;
  border-radius: 5px;
  background-color: #273c75;
  opacity: 0.8;
  position: fixed;
  z-index: 9999;
  bottom: 45px;
  right: 60px;
}
.alertbox {
  width: 50%;
  height: 80px;
  background-color: #61b1ce;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  z-index: 99999999999999;
}
.alertboxshow {
  top: 230px;
}
</style>