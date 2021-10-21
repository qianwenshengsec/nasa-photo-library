<template>
  <div id="home">
    <div class="typo">
      <ul>
        <li><a href="#earth">Landsat 8</a></li>
        <li>
          <a href="#mars"
            >Curiosity、Opportunity、Spirit Rover</a
          >
        </li>
        <li><a href="#library">NASA Media Library</a></li>
        <li>
          <a href="#apod">Astronomy Picture of the Day</a>
        </li>
        <li>
          <a href="#asteroids">Near Earth Object Web Service</a>
        </li>
      </ul>
      <p>
        阿波罗计划 Apollo
        program是美国在1961年到1972年组织实施的一系列载人登月飞行任务。
        目的是实现载人登月飞行和人对月球的实地考察，为载人行星飞行和探测进行技术准备，它是世界航天史上具有划时代意义的一项成就。
        1969年7月16日，土星5号超重型运载火箭载着阿波罗11号飞船从美国卡纳维拉尔角肯尼迪航天中心点火升空，开始了人类首次登月的太空征程。
        美国宇航员尼尔·奥尔登·阿姆斯特朗、巴兹·奥尔德林、迈克尔·柯林斯驾驶着阿波罗11号宇宙飞船跨过38万公里的征程，
        承载着全人类的梦想踏上了月球表面。<strong
          style="color: red"
          @click="getmsg"
          >阿波罗登月相关信息</strong
        >
        <strong>{{ errMsg }}</strong>
      </p>
      <p style="font-size: 20px">
        {{ database }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      errMsg: "",
      strArr: [],
      database: "",
      baseurl: "https://images-api.nasa.gov/search",
      isload:false
    };
  },
  methods: {
    getmsg() {
      this.errMsg = 'Loading'
      this.t_200 = setInterval(()=>{
        this.errMsg +='.'
      },1000)
      let that = this;
      this.$http({
        url: this.baseurl,
        type: "get",
        params: {
          q: "apollo",
          media_type: "audio",
        },
      })
        .then(({ data }) => {
          this.database = data.collection.items[0].data[0].description;
          clearInterval(that.t_200)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
#home {
  padding: 20px;
  background-color: #c7edcc;
  color: rgb(0, 0, 0);
}
strong {
  background-color: yellow;
}
strong:hover {
  border: 1px solid red;
}
</style>