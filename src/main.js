import { createApp,h } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios  from 'axios' 
import pubsub from 'pubsub-js'
import 'assets/font/iconfont.js'
import JsonViewer from "vue3-json-viewer"
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app  = createApp({
  render: ()=>h(App)
});

app.config.globalProperties.$http = axios
app.config.globalProperties.$pubsub = pubsub

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.use(ElementPlus)

app.use(store).use(router).use(VueViewer).use(JsonViewer)

app.mount('#app')

