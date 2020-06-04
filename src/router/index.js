import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import page404 from '@/components/exception/404'
import page403 from '@/components/exception/403'
import page500 from '@/components/exception/500'
import Index from '@/page/index'
import RouteView from '@/components/layout/RouteView'

import PageView from '@/components/layout/page/page-view'

import workspace from '@/page/dashboard/workspace'
import analysis from '@/page/dashboard/analysis'

import QueryList from '@/page/table/QueryList'

import ChartDemo from '@/page/viserChart/chartDemo'

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
    }, {
      path: '/',
      name: '首页',
      component: Index,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          icon: 'dashboard',
          component: RouteView,
          children: [
            {
              path: '/dashboard/workspace',
              name: '工作台',
              icon: 'none',
              component: workspace
            },
            {
              path: '/dashboard/analysis',
              name: '分析页',
              icon: 'none',
              component: analysis
            }
          ]
        },
        {
          path: '/form',
          name: '表单页',
          icon: 'form',
          children: [
            {
              path: '/form/basic',
              name: '基础表单',
              icon: 'none'
            },
            {
              path: '/form/step',
              name: '分步表单',
              icon: 'none'
            },
            {
              path: '/form/advanced',
              name: '高级表单',
              icon: 'none'
            }
          ]
        },
        {
          path: '/list',
          name: '列表页',
          icon: 'table',
          component: PageView,
          children: [
            {
              path: '/list/query',
              name: '查询表格',
              icon: 'none'
            },
            {
              path: '/list/primary',
              name: '标准列表',
              icon: 'none',
              component: QueryList
            },
            {
              path: '/list/chart',
              name: '图表样例',
              icon: 'none',
              component: ChartDemo
            },
            {
              path: '/list/card',
              name: '卡片列表',
              icon: 'none'
            },
            {
              path: '/list/search',
              name: '搜索列表',
              icon: 'none',
              children: [
                {
                  path: '/list/search/article',
                  name: '文章',
                  icon: 'none'
                },
                {
                  path: '/list/search/application',
                  name: '应用',
                  icon: 'none'
                },
                {
                  path: '/list/search/project',
                  name: '项目',
                  icon: 'none'
                }
              ]
            }
          ]
        },
        {
          path: '/detail',
          name: '详情页',
          icon: 'profile',
          children: [
            {
              path: '/detail/basic',
              name: '基础详情页',
              icon: 'none',
            },
            {
              path: '/detail/advanced',
              name: '高级详情页',
              icon: 'none',
            }
          ]
        },
        {
          path: '/result',
          name: '结果页',
          icon: 'check-circle-o',
          children: [
            {
              path: '/result/success',
              name: '成功',
              icon: 'none',
            },
            {
              path: '/result/error',
              name: '失败',
              icon: 'none',
            }
          ]
        }
      ]
    }
  ]
})
