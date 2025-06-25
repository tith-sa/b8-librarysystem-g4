import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Student from "../pages/Student.vue";
import Book from "../pages/Book.vue";
import Login from "../pages/Login.vue";
import AddStudent from "../pages/Add-student.vue";
import AddBook from "../pages/Add-book.vue";
import Borrow from "../pages/Borrow.vue";
import AddBorrow from "../pages/add-borrow.vue";
import EditStudent from "../pages/EditStudent.vue";
import EditBook from "../pages/EditBook.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/login", name: "login", component: Login },
  { path: "/Home", name: "Home", component: Home },
  { path: "/Student", name: "Student", component: Student },
  { path: "/book", name: "Book", component: Book },
  { path: "/Borrow", name: "Borrow", component: Borrow },
  { path: "/add-student", name: "AddStudent", component: AddStudent },
  { path: "/add-book", name: "AddBook", component: AddBook },
  { path: "/add-borrow", name: "AddBorrow", component: AddBorrow},
  { path: '/edit-student/:id', component: EditStudent },
  { path: '/edit-book/:id', name: "EditBook", component: EditBook },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
