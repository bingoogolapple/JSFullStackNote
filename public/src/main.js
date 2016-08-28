import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  hashbang: false
})

router.map({})

// router.map({
//   '/index': {
//     component: App
//   }
// })

// router.redirect({
//   '*': '/index'
// })

router.start(App, '#app')
