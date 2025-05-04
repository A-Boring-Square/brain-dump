import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

// Components for routing
import Home from './pages/Home.vue'
import About from './pages/About.vue'

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About Us', component: About }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create app and use router
createApp(App).use(router).mount('#app')
