import { createRouter, createWebHistory } from 'vue-router';


import PageHome from './pages/PageHome.vue';
import PageAbout from './pages/PageAbout.vue';
import PageBlog from './pages/PageBlog.vue';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: PageBlog
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
        path: '/404',
        name: '404',
        component: Error404
        },
    ]
});
export { router };