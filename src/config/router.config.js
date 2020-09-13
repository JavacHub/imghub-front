import { BlankLayout, HomeLayout, AdminLayout, UserLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view'),
}

export const constantRouterMap = [
  // home
  {
    path: '/',
    name: 'home',
    component: HomeLayout,
    children: [
      // 这里写 home 的 pages
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/user/Login'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('@/views/user/Register'),
      },
    ],
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
]

export const asyncRouterMap = [

  {
    path: '/admin',
    name: 'IndexLayout',
    component: AdminLayout,
    meta: { title: 'menu.home' },
    redirect: '/admin/welcome',
    children: [
      // admin
      {
        path: '/admin',
        name: 'IndexRoute',
        redirect: '/admin/welcome',
        component: RouteView,
        meta: { title: 'menu.admin.default', keepAlive: true, icon: 'dashboard', permission: ['admin'] },
        children: [
          {
            path: '/admin/welcome',
            name: 'Welcome',
            component: () => import('@/views/admin/Welcome'),
            meta: { title: 'menu.admin.welcome', keepAlive: false, permission: ['admin'] },
          },
        ],
      },
      // form
      {
        path: '/form',
        name: 'form',
        meta: {
          keepAlive: true,
          title: 'menu.form.default',
          icon: 'video-camera',
        },
        component: RouteView,
        children: [
          {
            path: '/form/basic-form',
            name: 'basic-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.basicform',
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/form/basic-form'),
          },
          {
            path: '/form/step-form',
            name: 'step-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.stepform',
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/form/step-form'),
          },
          {
            path: '/form/advanced-form',
            name: 'advanced-form',
            meta: {
              keepAlive: true,
              icon: 'smile',
              title: 'menu.form.advancedform',
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/form/advanced-form'),
          },
        ],
      },
    ],
  },
  {
    path: '*', redirect: '/404', hidden: true,
  },
]
