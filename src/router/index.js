import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Student from "../pages/Student.vue";
import Book from "../pages/Book.vue";
import Login from "../pages/Login.vue";
import AddStudent from "../pages/Add-student.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/login", name: "login", component: Login },
  { path: "/Home", name: "Home", component: Home },
  { path: "/Student", name: "Student", component: Student },
  { path: "/book", name: "Book", component: Book },
  { path: "/add-student", name: "AddStudent", component: AddStudent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
