import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // ホームコンポーネント
import About from '../components/About.vue'; // アバウトコンポーネント

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;