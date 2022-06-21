import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutVue from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import ProductsView from '../views/ProductsView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import LogInView from '../views/LogInView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutVue
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
