import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/middlewares/auth.js';
import AuthRoute from './auth'
import Cookies from '@/plugins/cookie';
import store from '@/store';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: () => {
      return 'dashboard'
    },
    meta: {
      middleware: [Auth]
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "default" */ '@/modules/home/views/Products.vue'),
    meta: {
      middleware: [Auth]
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "default" */ '@/modules/home/views/Dashboard.vue'),
    meta: {
      middleware: [Auth]
    }
  },
  {
    path: '/stores',
    name: 'stores',
    component: () => import(/* webpackChunkName: "default" */ '@/modules/home/views/Stores.vue'),
    meta: {
      middleware: [Auth]
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "default" */ '@/modules/home/views/Setting.vue'),
    meta: {
      middleware: [Auth]
    }
  },
  ...AuthRoute

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/auth') {
    next({ name: 'login' })
    return;
  }
  if (to.path === '/logout') {
    store.dispatch('auth/logout')
    next({ name: 'login' })
    return;
  }

  if (to.meta.middleware) {
    const middleware = to.meta.middleware
    const payload = { to, from, next, store }
    let preventNext = false
    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload)
      if (!result) {
        preventNext = true
        break
      }
    }
    if (preventNext) {
      return
    }
  }
  next();
})

export default router
