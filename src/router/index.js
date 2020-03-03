import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('view/home/Home.vue')
const Category = () => import('view/category/Category.vue')
const Shopcar = () => import('view/shopcar/Shopcar.vue')
const Profile = () => import('view/profile/Profile.vue')
const Detail = () => import('view/detail/Detail.vue')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
export default new Router({
  routes,
  mode: 'history'
})
