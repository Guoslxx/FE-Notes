import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/blog',
    },
    {
        path: '/blog',
        component: () => import('@/views/posts/posts.vue'),
    },
    {
        path: '/post/:postId',
        component: () => import('@/views/posts/postDetail.vue'),
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})