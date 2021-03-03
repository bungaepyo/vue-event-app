import Vue from 'vue'
import Router from 'vue-router'
import EventPlanner from './views/EventPlanner.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventPlanner',
      component: EventPlanner
    }
  ]
})
