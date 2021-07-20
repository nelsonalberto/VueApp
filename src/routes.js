import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import Posts from './components/Posts.vue';

const routes = 
[
    { path: '/', component: Home},
    { path: '/users', component: Users},
    { path: '/posts/:id', component: Posts}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;