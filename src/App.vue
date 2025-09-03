<template>

  <h1 id="title">Color Picker</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
  @import url('@/assets/base.css');

  nav {
    position: fixed;
    right: 5px;
    bottom: 5px;
  }
  #title{
    text-align: center;
    font-weight: 900;
    font-size: 40px;
    text-shadow: 0 0 20px rgba(var(--picked-inv),0.7);
    transition: text-shadow 2s,color 1.5s;
  }
</style>
