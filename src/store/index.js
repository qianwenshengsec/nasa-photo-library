import { createStore } from 'vuex'

const moduleA = {
  namespaced:true,
  state: () => ({ 
    routeList:[
      { 
        id:'1',
        name: "Introduction",
        path: "/home",
        symbol: '<use xlink:href="#icon-zhuye"></use>'
      },
      {
        id:'2',
        name: "Landsat8 Satellite",
        path: "/earth",
        symbol: '<use xlink:href="#icon-diqiu2"></use>'
      },
      { 
        id:'3',
        name: "Mars Rover",
        path: "/mars",
        symbol: '<use xlink:href="#icon-yutuhaoyueqiuche"></use>'
      },
      { 
        id:'4',
        name: "NASA Library",
        path: "/library",
        symbol: '<use xlink:href="#icon-Nasa"></use>'
      },
      {
        id:'5',
        name: "Astrophotography",
        path: "/apod",
        symbol: '<use xlink:href="#icon-tianwenwangyuanjing"></use>'
      },
      {
        id:'6',
        name:'Asteroid',
        path:'/asteroids',
        symbol: '<use xlink:href="#icon-tubiaozhizuomoban-"></use>'
      },

      // {
      //   id:'7',
      //   name: "地球多色相机",
      //   path: "/epic",
      //   symbol: '<use xlink:href="#icon-zhuye"></use>'
      // },
      
      // {
      //   id:'8',
      //   name: "系外行星",
      //   path: "/exoplanet",
      //   symbol: '<use xlink:href="#icon-mars_"></use>'
      // },
    ],
    whethershow:null,
    before_and_after_date:[],
    vuexpicList:{},
    howmuch:15
   }),
  mutations: { 
    changehowmuch(state,payload){
      state.howmuch+=payload
    },
    changewhethershow(state){
      state.whethershow = !state.whethershow
    },
    changewhethershowTrue(state){
      state.whethershow = true
    },
    changewhethershowFalse(state){
      state.whethershow = false
    },
    changevuexdate(state,payload){
      state.before_and_after_date = payload
    },
    addpic(state,payload){
      state.vuexpicList = payload
    }
   },
  actions: {  },
  getters: {  }
}

const moduleB = {
  namespaced:true,
  state: () => ({ 
    AsteroidsData:{}
   }),
  mutations: { 
    changeAsteroidsData(state,payload){
      state.AsteroidsData = payload
    }
   },
  actions: {  }
}

const moduleC = {
  namespaced:true,
  state: () => ({ 
    EarthBuffer:null
   }),
  mutations: { 
    updateEarthBuffer(state,payload){
      state.EarthBuffer = payload
    }
   },
  actions: {  }
}


 const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC
  }
})

export default store
