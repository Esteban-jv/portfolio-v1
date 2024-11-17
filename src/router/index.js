import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:load?',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/courses',
            name: 'courses',
            component: () => import('../views/CoursesView.vue')
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ 
            /*behavior: 'smooth'*/ 
        });
    }
})

export default router