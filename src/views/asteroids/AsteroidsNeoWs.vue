<template>
  <div id="asteroids-neows">
    <search-input></search-input>
    <!-- <teleport to="#asteroids-neows"> -->
      <div class="just-box">
        <json-viewer :value="jsonData" copyable boxed sort class="jsonbox" />
      </div>
    <!-- </teleport> -->
  </div>
</template>

<script>
import { reactive } from "vue";
import SearchInput from "./SearchInput";
export default {
  name: "AsteroidsNeoWs",
  components: {
    SearchInput,
  },
  data() {
    return {};
  },
  computed: {
    jsonData() {
      return reactive(this.$store.state.b.AsteroidsData);
    },
  },
};
</script>

<style lang="less" scoped>
#asteroids-neows {
  padding: 20px;
  background-color: #4b4b4b;
}
.just-box {
  height: 100%;
  margin-top: 20px;
  position: relative;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
}
.jsonbox {
  width: 100%;
}
</style>