import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('../views/login')
//   },
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('../views/index')
//   }
// ]

import Sys from './modules/sysUsers'
import sysDicts from './modules/sysDicts'
import sysMenu from './modules/sysMenu'
import sysRole from './modules/sysRole'

// 公有路由
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '/index',
        component: () => import('../views/index'),
        meta: {
          title: '首页',
          icon: 'personnel'
        }
      }
    ]
  }
]

// 私有路由表
export const privateRoutes = [Sys, sysDicts, sysMenu, sysRole]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
