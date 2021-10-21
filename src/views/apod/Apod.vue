<template>
  <div id="apod">
    <div class="play-box">
    <date-input></date-input>
    </div>
    <div class="typo" style="padding:10px 20px;">
      <strong style="color:red;">默认显示过去15天的"每日天文图" 宁可以锁定日期区间发起检索&nbsp;&nbsp;</strong>
      <strong style="color:red;">点击图片全屏预览</strong>
    </div>
    <div class="imgcontainer">
      <div class="shell" v-viewer ref="shellref">
        <template v-for="pic of $store.state.a.vuexpicList">
          <div class="image" v-if="pic.media_type == 'image'">
            <img :src="pic.url" :alt="pic.title" :key="pic.date" />
            <h6 style="color: white">{{pic.date}}</h6>
            <h5 style="color:white;">&copy;{{ pic.copyright ? pic.copyright : "无版权" }}</h5>
            <h6>
              <a :href="pic.hdurl" style="color: white">HD高清图片地址</a>
            </h6>
          </div>
        </template>
      </div>
    </div>
    <button class="btn2" @click="clearphoto">清空</button>
    <!-- <div class="more-pic" @click="addpic">点击加载更多图片😋</div> -->
  </div>
</template>

<script>
import $ from "jquery";
import DateInput from "./DateInput.vue";
import perioddate from "../../common/perioddate";
import { DEMO_KEY } from "../../apis/request";
export default {
  name: "Apod",
  components: {
    DateInput,
  },
  methods: {
    clearphoto(){
     this. $store.state.a.vuexpicList = {}
    },
    addpic() {
      console.log($(document).height());
      let topdist = $(document).height();
      this.$store.commit("a/changehowmuch", 20);
      // $("html, body").animate({ scrollTop: topdist }, 400);
    },
  },
  data() {
    return {
      start_date: ``,
      end_date: ``,
      // distanceTop: document.documentElement.scrollTop,
    };
  },
  created() {
    let dateArr = perioddate(this.$store.state.a.howmuch);
    this.$store.commit("a/changevuexdate", dateArr);
  },
  mounted() {
    this.$nextTick(function () {});
  },
  computed: {
    vuexchangedateArr() {
      return this.$store.state.a.before_and_after_date;
    },
    vuexchangehowmuch() {
      return this.$store.state.a.howmuch;
    },
  },
  watch: {
    vuexchangedateArr(val) {
      this.start_date = val[0];
      this.end_date = val[1];

      this.$http({
        url: `https://api.nasa.gov/planetary/apod`,
        type: "get",
        params: {
          api_key: DEMO_KEY,
          start_date: this.start_date,
          end_date: this.end_date,
        },
      })
        .then((res) => {
          this.$store.commit("a/addpic", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    vuexchangehowmuch(val) {
      let dateArr = perioddate(val);
      this.$store.commit("a/changevuexdate", dateArr);
    },
  },
};
</script>

<style lang="less" scoped>

.btn2 {
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
  background-color: #30336b;
  opacity: 0.8;
  position: fixed;
  right: 60px;
  bottom: 45px;
  z-index: 99999999999999;
}
.play-box{
  width: 100%;
  padding: 20px;
  background-color: #222f3e;
}
.more-pic {
  width: 100%;
  height: 50px;
  background-color: slateblue;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  position: absolute;
  bottom: 100px;
}

.img-message {
  // display: none;
  display: block;
  width: 80%;
  height: 50%;
  background-color: salmon;
}

.imgcontainer {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
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
#apod{
  background-color: #2C3A47;
}
</style>