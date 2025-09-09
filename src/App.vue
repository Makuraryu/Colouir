<template>
<Alert />

<h1 id="title">Colouir</h1>
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <a href="https://github.com/Makuraryu/Colouir">GitHub</a>
</nav>

<transition name="fade" mode="out-in">
  <RouterView />

</transition>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Alert from '@/components/Alert.vue'
</script>

<style scoped>

nav {
  position: fixed;
  right: 20px;
  bottom: 5px;
  z-index: 999;
}
#title{
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  text-shadow: 0 0 20px rgba(var(--picked-inv),0.7);
  transition: text-shadow 2s,color 1.5s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
