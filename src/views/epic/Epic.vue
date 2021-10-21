<template>
  <div id="epic">
    <div class="block">
      <span class="demonstration">value:{{value}}</span>
      <el-date-picker
        v-model="value"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        format="YYYY-MM-DD"
        value-format="YYYY/MM/DD"
      >
      </el-date-picker>
    </div>
    <button @click="getEpic">GET</button>
  </div>
</template>

<script>
import {DEMO_KEY} from '../../apis/request'
export default {
  name: "Epic",
  data() {
    return {
      value: "",
      Receivedata:null
    };
  },
  computed: {},
  methods: {
    getEpic(){
      this.$http({
        url:'https://api.nasa.gov/EPIC/api/natural/images?',
        type:'get',
        params:{
          // date:this.value,
          api_key:DEMO_KEY,
        }
      }).then(res=>{
        // console.log(res.data)
      })
    }
  },
};
</script>

<style lang="less" scoped>
#epic {
  padding: 0px 20px;
}
</style>