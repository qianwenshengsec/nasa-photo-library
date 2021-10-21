<template>
  <div id="about">
    <div class="editor" v-if="true">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import {debounce} from '../../common/debounce'
export default {
  name: "About",
  data() {
    return {
      input: '#### wechat:qws18267334075 email:qianwenshengsec@gmail.com'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>

<style lang="less" scoped>
#about{
  padding: 0 20px;
}
.editor {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
.editor div {
  display: inline-block;
  width: 49%;
  height: 800px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>