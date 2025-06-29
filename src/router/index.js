// index.jsでルーティングを設定
import { createRouter, createWebHistory } from 'vue-router'

// 各ページコンポーネントを読み込む
import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import Skills from '@/views/SkillsPage.vue'
import Works from '@/views/WorksPage.vue'
// import Note from '@/views/NotePage.vue'

// routes の component に importしたコンポーネントを指定
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/works', component: Works },
  // { path: '/note', component: Note },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router