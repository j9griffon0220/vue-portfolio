// index.jsでルーティングを設定
import { createRouter, createWebHistory } from 'vue-router'

// 各ページコンポーネントを読み込む
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Works from '@/views/Works.vue'
import Note from '@/views/Note.vue'

// routes の component に importしたコンポーネントを指定
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/works', component: Works },
  { path: '/note', component: Note },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router