import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

// Components for routing
import Home from './pages/Home.vue'
import About from './pages/About.vue'

// Define routes
const routes = [
  { path: '/brain-dump/', name: 'Home', component: Home },
  { path: '/brain-dump/about', name: 'About Me', component: About }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create app and use router
createApp(App).use(router).mount('#app')
