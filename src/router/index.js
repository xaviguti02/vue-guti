import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ApiData from '../views/ApiData.vue'
import CrudPage from '../views/CrudPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/api', name: 'ApiData', component: ApiData },
  { path: '/crud', name: 'CrudPage', component: CrudPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
