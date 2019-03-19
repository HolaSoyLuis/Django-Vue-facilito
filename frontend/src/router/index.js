import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import list from '@/components/book/list'
import edit from '@/components/book/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/book/list',
      name: 'list',
      component: list
    },
    {
      path: '/book/:id/edit',
      name: 'edit',
      component: edit
    }
  ],
  mode: 'history'
})
