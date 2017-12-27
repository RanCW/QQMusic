import Vue from 'vue'
import Router from 'vue-router'
import remommend from 'views/recommend/index.vue'
import rank from 'views/rank/index.vue'
import search from 'views/search/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'remommend',
      component: remommend
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
