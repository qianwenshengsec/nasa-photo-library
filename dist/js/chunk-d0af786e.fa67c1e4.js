(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0af786e"],{b3d7:function(e,t,a){"use strict";a.r(t);var r=a("7a23");const c={id:"home"},o={class:"typo"},i=Object(r["createStaticVNode"])('<ul data-v-0fbc4800><li data-v-0fbc4800><a href="#earth" data-v-0fbc4800>Landsat 8 陆地资源卫星拍摄图像 检索</a></li><li data-v-0fbc4800><a href="#mars" data-v-0fbc4800>Curiosity、Opportunity、Spirit Rover 火星车相机 图像检索</a></li><li data-v-0fbc4800><a href="#library" data-v-0fbc4800>NASA Media Library NASA新闻媒体图像 检索</a></li><li data-v-0fbc4800><a href="#apod" data-v-0fbc4800>Astronomy Picture of the Day 每日天文图 检索</a></li><li data-v-0fbc4800><a href="#asteroids" data-v-0fbc4800>Near Earth Object Web Service 近地小天体</a></li></ul>',1),s=Object(r["createTextVNode"])(" 阿波罗计划 Apollo program是美国在1961年到1972年组织实施的一系列载人登月飞行任务。 目的是实现载人登月飞行和人对月球的实地考察，为载人行星飞行和探测进行技术准备，它是世界航天史上具有划时代意义的一项成就。 1969年7月16日，土星5号超重型运载火箭载着阿波罗11号飞船从美国卡纳维拉尔角肯尼迪航天中心点火升空，开始了人类首次登月的太空征程。 美国宇航员尼尔·奥尔登·阿姆斯特朗、巴兹·奥尔德林、迈克尔·柯林斯驾驶着阿波罗11号宇宙飞船跨过38万公里的征程， 承载着全人类的梦想踏上了月球表面。"),d={style:{"font-size":"20px"}};function l(e,t,a,l,n,b){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("div",o,[i,Object(r["createElementVNode"])("p",null,[s,Object(r["createElementVNode"])("strong",{style:{color:"red"},onClick:t[0]||(t[0]=(...e)=>b.getmsg&&b.getmsg(...e))},"阅读阿波罗登月计划相关信息"),Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(n.errMsg),1)]),Object(r["createElementVNode"])("p",d,Object(r["toDisplayString"])(n.database),1)])])}var n={name:"Home",data(){return{errMsg:"",strArr:[],database:"",baseurl:"https://images-api.nasa.gov/search",isload:!1}},methods:{getmsg(){this.errMsg="Loading",this.t_200=setInterval(()=>{this.errMsg+="."},1e3);let e=this;this.$http({url:this.baseurl,type:"get",params:{q:"apollo",media_type:"audio"}}).then(({data:t})=>{this.database=t.collection.items[0].data[0].description,clearInterval(e.t_200)}).catch(e=>{console.log(e)})}},mounted(){}},b=(a("dabc"),a("d959")),p=a.n(b);const f=p()(n,[["render",l],["__scopeId","data-v-0fbc4800"]]);t["default"]=f},dabc:function(e,t,a){"use strict";a("e8e8")},e8e8:function(e,t,a){}}]);
//# sourceMappingURL=chunk-d0af786e.fa67c1e4.js.map