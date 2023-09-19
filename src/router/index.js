import { createRouter, createWebHistory } from 'vue-router'

import Contato from '../views/Contato.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'Home'
    },
    {
      path:'/Home',
      name:'Home',
      component: Home
    },
    {
      path:'/contato',
      name:'Contato',
      component: Contato
    }
  ]
})

export default router
