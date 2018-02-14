import Vue from 'vue'
import Router from 'vue-router'

const afterEnd = () => import('../views/after-end/afterEnd')
const fontEnd = () => import('../views/font-end/fontEnd')
const smile = () => import('../views/smile/smile')
const admin = () => import('../views/admin/admin')
const login = () => import('../views/login/login')
const home  = () => import('../views/home/home')
const editor = () => import('../views/editor/editor')
const detail = () => import('../views/article-detail/detail')
const management = () => import('../views/management/management')
const update = () => import('../views/update/update')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect: '/fontend',
      children: [
        {
          path: '/afterend',
          component: afterEnd
        },
        {
          path: '/fontend',
          component: fontEnd
        },
        {
          path: '/smile',
          component: smile
        },
        {
          path: '/detail/:id',
          component: detail
        }
      ]
    },
    {
      path: '/admin',
      component: admin,
      redirect: '/editor',
      children: [
        {
          path: '/editor',
          component: editor
        },
        {
          path: '/management',
          component: management
        },
        {
          path: '/update/:id',
          component: update
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})
