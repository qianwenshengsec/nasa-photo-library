import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const About = () => import('views/about/About.vue')
const Apod = () => import('views/apod/Apod.vue')
const Mars = () => import('views/mars/Mars.vue')
const Earth = () => import('views/earth/Earth.vue')
const Library = () => import('views/library/Library.vue')
const AsteroidsNeoWs = () => import('views/asteroids/AsteroidsNeoWs.vue')
// const Epic = () => import('views/epic/Epic.vue')
// const Exoplanet = () => import('views/exoplanet/Exoplanet.vue')


const routes = [
  {
    path: '',
    redirect: '/mars',
  },
  {
    path: '/asteroids',
    component: AsteroidsNeoWs,
    meta: {
      title: 'Asteroids'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/apod',
    component: Apod,
    meta: {
      title: 'Astrophotography'
    }
  },
  {
    path: '/mars',
    component: Mars,
    meta: {
      title: 'Mars'
    }
  },
  {
    path: '/earth',
    component: Earth,
    meta: {
      title: 'Earth'
    }
  },
  {
    path: '/library',
    component: Library,
    meta: {
      title: 'Library'
    }
  },
  
  // {
  //   path: '/epic',
  //   component: Epic,
  //   meta:{
  //     title:'地球多色相机'
  //   },
  //   beforeEnter: (to, from) => {
  //     console.log('@', to.path, from.path)
  //   },
  // },

  // {
  //   path: '/exoplanet',
  //   component: Exoplanet
  // },
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  if(to.meta.title){
    // console.log(to.meta.title,'&')
    document.title = to.meta.title
  }
  // ...
  // 返回 false 以取消导航
  // console.log('#', to.meta.title, from.meta.title)
  // return false
})

router.afterEach((to, from) => {
  // console.log('$', to.path, from.path)
})

export default router
