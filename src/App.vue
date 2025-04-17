<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav>
    <router-link name="Home" to="/"><h4>Home</h4></router-link>
    <router-link to="/about"><h4>About</h4></router-link>
    <span class="current-page"><h4>Current Page: {{route.name}}</h4></span>
  </nav>

  <main class="content-area">
    <router-view />
  </main>
</template>

<style scoped>
.content-area {
  margin: 1%;
}
nav {
  background-color: var(--accent-color);
  color: var(--color-text);
  padding-left: 1%;
  display: flex;
  gap: 1rem;
  align-items: center;
}

a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
}

.current-page {
  margin-left: auto;
  padding-right: 1%;
  font-style: italic;
}
</style>

