// index.jsでルーティングを設定
import { createRouter, createWebHistory } from 'vue-router'

// 各ページコンポーネントを読み込む
import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import Skills from '@/views/SkillsPage.vue'
import Works from '@/views/WorksPage.vue'
import NotFound from '@/views/NotFound.vue'
import Note from '@/views/NotePage.vue'

// routes の component に importしたコンポーネントを指定
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/works', name: 'Works', component: Works },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/note', name: 'Note', component: Note },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router