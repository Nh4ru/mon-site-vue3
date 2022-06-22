import { createRouter, createWebHistory } from 'vue-router'
import MaHome from '@/views/MaHome'

const routes = [
        {
            path: '/',
            name: "home",
            component: MaHome
        },
        {
            path: '/apropos',
            name: "apropos",
            component: Apropos
        },
        {
            path: '/portfolio',
            name: "portfolio",
            component: Portfolio
        },
        {
            path: '/contact',
            name: "contact",
            component: Contact
        }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;