import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'views/recommend/index.vue'
import rank from 'views/rank/index.vue'
import search from 'views/search/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})
