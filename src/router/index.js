import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Student from '../pages/Student.vue'
import Book from '../pages/Book.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', name: 'Login', component: Login},
  { path: '/Home', name: 'Home', component: Home },
  { path: '/Student', name: 'Student', component: Student },
  { path: '/book', name: 'Book', component: Book }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
