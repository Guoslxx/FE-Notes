<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Layout/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>