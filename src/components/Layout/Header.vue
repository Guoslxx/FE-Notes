<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <router-link to="/">LOGO</router-link>
      </div>
      <nav class="header-nav">
        <a href="#">Blog</a>
        <a href="#">Notes</a>
        <a href="#">Bookmark</a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="less">
.header {
  background-color: rgba(255, 255, 255, 0.6);
  position: sticky;
  top: 0;
  
  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;

    .header-nav {
      padding: 30px 0;
      a {
        color: var(--color-gray-7);
        text-decoration: none;
        margin-left: 15px;
      }
    }
  }
}
</style>