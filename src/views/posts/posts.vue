
<script lang="ts" setup>
</script>

<template>
  <h2 class="module-title">Bookmarks</h2>
  <div class="posts">
    <ul class="post-list">
      <li class="post-item" v-for="item in Array(10)" :key="item">
        <div class="post-title">
          <router-link to="/post/xxx">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </router-link>
        </div>
        <div class="post-meta">
          <span class="date">2022 · 03 · 24</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.post-list {
  max-width: var(--main-container-max-width);
  margin: 0 auto;

  .post-item {
    margin-bottom: 32px;
    .post-title {
      margin-bottom: 6px;

      a {
        font-size: 18px;
        padding: 8px 0;
        transition: color 0.2s ease-in;
        color: var(--color-gray-8);
        &:hover {
          color: var(--color-gray-9);
        }
      }
    }

    .post-meta .date {
      font-size: 12px;
      color: var(--color-gray-7);
    }
  }
}
</style>