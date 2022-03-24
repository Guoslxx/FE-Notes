<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Layout/Header.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<style lang="css">
:root {
  --color-input-bg: #f4f5f5;
  --color-input-error-bg: #ffece8;
  --color-input-placeholder: #86909c;
  --color-input-text: #4e5969;
  --color-input-icon: #f53f3f;
  --color-a-text: #a5a5a5;
}
html {
  background-color: #f4f5f5;
}
body {
  -webkit-font-smoothing: unset !important;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial !important;
}

.main-container{
  max-width: 1228px;
  margin: 0 auto;
}
</style>
