import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProjectView from '@/views/ProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainView
    },
    {
        path: '/project/:id',
        name: 'Project showcase',
        component: ProjectView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
