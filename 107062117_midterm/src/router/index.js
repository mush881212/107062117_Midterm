import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Page1 from '@/views/page1.vue'
import Page2 from '@/views/page2.vue'
import Page3 from '@/views/page3.vue'
import Page4 from '@/views/page4.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3
  },
  {
    path: '/page4',
    name: 'page4',
    component: Page4
  },

]

const router = new VueRouter({
  routes
})

export default router
