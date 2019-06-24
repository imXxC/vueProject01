import Vue from 'vue'
import vueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/home.vue'
import List from '../components/list.vue'
import Plugins from '../components/plugins.vue'
import Search from '../components/search.vue'
import formWrap from '../components/formwrap.vue'

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'HelloWorld'}
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Plugins',
      name: 'Plugins',
      component: Plugins
    },
    {
      path: '/Search/:id',
      name: 'Search',
      component: Search
    },
    {
      path: '/FormWrap',
      name: 'formwrap',
      component: formWrap
    }
  ]
})

export default router