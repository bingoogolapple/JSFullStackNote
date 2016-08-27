import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'

Vue.use(Router)
Vue.use(VueResource)

var router = new Router()

router.map({
})

router.start(App, '#app')
