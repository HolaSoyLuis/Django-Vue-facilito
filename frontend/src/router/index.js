import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import book from '@/components/book/list'

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
      name: 'Lista de libros',
      component: book
    }
  ],
  mode: 'history'
})
