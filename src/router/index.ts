import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/MainLayout.vue'

const routes = [
  // 定义路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

export const defineRoutes = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      title: '工作台',
      icon: 'Monitor'
    },
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/material',
    name: 'material',
    redirect: '/material/list',
    component: MainLayout,
    meta: {
      title: '素材管理',
      icon: 'VideoCamera'
    },
    children: [
      {
        path: 'list',
        name: 'materialList',
        component: () => import('../views/material/list.vue'),
        meta: {
          title: '素材库'
        }
      }
    ]
  },
  {
    path: '/merchant',
    name: 'merchant',
    redirect: '/merchant/list',
    component: MainLayout,
    meta: {
      title: '商户管理',
      icon: 'Management'
    },
    children: [
      {
        path: 'list',
        name: 'merchantList',
        component: () => import('../views/merchant/list.vue'),
        meta: {
          title: '商户列表'
        }
      },
      {
        path: 'apply',
        name: 'merchantApply',
        component: () => import('../views/merchant/apply.vue'),
        meta: {
          title: '审核列表'
        }
      },
      {
        path: 'audit',
        name: 'audit',
        component: () => import('../views/merchant/audit.vue'),
        meta: {
          title: '商户审核'
        }
      }
    ]
  },
  {
    path: '/shopConfig',
    name: 'shopConfig',
    component: MainLayout,
    meta: {
      title: '系统配置',
      icon: 'Tools'
    },
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...defineRoutes]
})

export default router
