import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Layout from '../pages/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'Home',
        component: Home,
        meta: {
          parentPath: '/index'
        }
      }
    ]
  },
  {
    path: '/goods',
    redirect: '/goods/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/index',
        name: 'goods',
        component: () => import('../pages/goods/Goods'),
        meta: {
          title: '商品',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/admin/create',
        name: 'create',
        component: () => import('../pages/goods/create/Create'),
        meta: {
          title: '添加商品',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/admin/list',
        name: 'list',
        component: () => import('../pages/goods/list/List'),
        meta: {
          title: '商品列表',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/setting/category',
        name: 'category',
        component: () => import('../pages/goods/category/Category'),
        meta: {
          title: '商品分类',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/setting/brand',
        name: 'brand',
        component: () => import('../pages/goods/brand/Brand'),
        meta: {
          title: '商品品牌',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/setting/type',
        name: 'type',
        component: () => import('../pages/goods/type/Type'),
        meta: {
          title: '商品模型',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/setting/spec',
        name: 'spec',
        component: () => import('../pages/goods/spec/Spec'),
        meta: {
          title: '商品规格',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/setting/attribute',
        name: 'attribute',
        component: () => import('../pages/goods/attribute/Attribute'),
        meta: {
          title: '商品属性',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/opinion/comment',
        name: 'comment',
        component: () => import('../pages/goods/comment/Comment'),
        meta: {
          title: '商品评价',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods/opinion/consult',
        name: 'consult',
        component: () => import('../pages/goods/consult/Consult'),
        meta: {
          title: '商品咨询',
          parentPath: '/goods'
        }
      }
    ]
  },
  {
    path: '/order',
    redirect: '/order/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/order/index',
        name: 'order',
        component: () => import('../pages/order/Order'),
        meta: {
          title: '订单',
          parentPath: '/order'
        }
      }
    ]
  },
  {
    path: '/marketing',
    redirect: '/marketing/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/marketing/index',
        name: 'marketing',
        component: () => import('../pages/marketing/Marketing'),
        meta: {
          title: '营销',
          parentPath: '/marketing'
        }
      }
    ]
  },
  {
    path: '/member',
    redirect: '/member/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/member/index',
        name: 'member',
        component: () => import('../pages/member/Member'),
        meta: {
          title: '会员',
          parentPath: '/member'
        }
      }
    ]
  },
  {
    path: '/system',
    redirect: '/system/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/system/index',
        name: 'system',
        component: () => import('../pages/system/System'),
        meta: {
          title: '系统',
          parentPath: '/system'
        }
      }
    ]
  },
  {
    path: '/setting',
    redirect: '/setting/index'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/setting/index',
        name: 'setting',
        component: () => import('../pages/setting/Setting'),
        meta: {
          title: '设置',
          parentPath: '/setting'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About')
  }
]

const isPro = process.env.NODE_ENV === 'production'

const router = new VueRouter({
  mode: isPro ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
