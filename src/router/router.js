import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import page404 from '@/components/exception/404'
import page403 from '@/components/exception/403'
import page500 from '@/components/exception/500'
import Index from '@/page/index'

import PageView from '@/components/layout/page/page-view'

import Plan from '@/page/analysis/plan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/404',
      name: 'page404',
      component: page404
    },
    {
      path: '/403',
      name: 'page403',
      component: page403
    },
    {
      path: '/500',
      name: 'page500',
      component: page500
    },
    {
      path: '/',
      name: '首页',
      component: Index,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/analysis',
          name: '数据分析',
          icon: 'chart',
          component: PageView,
          children: [
            {
              path: '/analysis/advertising',
              name: '广告分析',
              icon: 'none'
            },
            {
              path: '/analysis/plan',
              name: '方案分析',
              icon: 'none',
              component: Plan
            },
            {
              path: '/analysis/activity',
              name: '活动分析',
              icon: 'none'
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: page404
    }
  ]
})
