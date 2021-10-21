<template>
  <div id="secondary-menu">
    <!-- <ul> -->
      <li
        v-for="(navList, index) in navLists"
        :key="index"
        @mouseover="isShow = index"
        @mouseout="isShow = !isShow"
      >
        <router-link :to="navList.route">
          <svg
            :class="{ icon: true }"
            :aria-hidden="true"
            v-html="navList.symbol"
          ></svg>
          <span>{{navList.name}}</span>
        </router-link>

        <ul v-show="index === isShow">
          <li v-for="(item, subindex) in navList.child" :key="subindex">
            <a :href="item.subRoute" @click="isShow = !isShow">
              <svg
            :class="{ icon: true }"
            :aria-hidden="true"
            v-html="item.subsymbol"
          ></svg>
          <span>{{item.subName}}</span>
            </a>
          </li>
        </ul>

      </li>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  name: "SecondaryMenu",
  data() {
    return {
      navLists: [
        {
          name: "",
          route: "/about",
          symbol:'<use xlink:href="#icon-weixin"></use>',
          child: [
            {
              subName: " ",
              subRoute: "https://gitee.com/qian-wensheng/static-nasa-vue",
              subsymbol:'<use xlink:href="#icon-github"></use>'
            },
            {
              subName: " ",
              subRoute:
                "https://space.bilibili.com/184881030?spm_id_from=333.1007.0.0",
              subsymbol:'<use xlink:href="#icon-bilibili4"></use>'
            },
          ],
        },
      ],
      isShow: 0,
    };
  },
  mounted() {
    this.isShow = -1;
  },
};
</script>
<style lang="less" scoped>

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // overflow: hidden; 
  background-color: #ddd;
}

ul li {
  display: block;
  // float: left;
  text-align: center;
  height: 50px;
  color: white;
}

ul li a {
  /*跟随父元素的高度*/
  height: inherit;
  padding: 0 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: white;
}
ul li:hover {
  background-color: rgb(255, 255, 255);
}

ul li span {
  color: rgb(255, 255, 255);
}

ul li span:hover {
  color: rgb(0, 0, 0);
}
</style>