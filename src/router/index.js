import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const booksList = () => import("../views/BooksList")
const booksCart = () => import("../views/BooksCart")
const booksInventory = () => import("../views/BooksInventory")
const customerAccount = () => import("../views/CustomerAccount")

const routes = [
  {path: "",redirect: "/booksList"},
  {path: "/booksList", component: booksList},
  {path: "/booksCart", component: booksCart},
  {path: "/booksInventory", component: booksInventory},
  {path: "/customerAccount", component: customerAccount},
]

const router = new VueRouter({
  routes
})

export default router
