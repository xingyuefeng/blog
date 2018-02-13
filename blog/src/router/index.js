import Vue from 'vue'
import Router from 'vue-router'
import afterEnd from '../views/after-end/afterEnd'
import fontEnd from '../views/font-end/fontEnd'
import smile from '../views/smile/smile'
import admin from '../views/admin/admin'
import login from '../views/login/login'
import home from '../views/home/home'
import editor from '../views/editor/editor'
import detail from '../views/article-detail/detail'
import management from '../views/management/management'
import update from '../views/update/update'

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
