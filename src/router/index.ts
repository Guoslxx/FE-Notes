import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/components/HelloWorld.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})