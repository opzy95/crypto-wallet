import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MarketView from '@/views/Market.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView},
    {path: '/Market', component: MarketView}
  ],
})

export default router
