import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/index.vue'
import Cart from '../views/cart.vue'
import Checkout from '../views/checkout.vue'
import Test from '../views/test.vue'
import About from '../views/about.vue'
import Demo from '../views/demo.vue'
import Games from '../views/games/index.vue'
import Game from '../views/games/_id.vue'
import Rules from '../views/games/rules/index.vue'
import Rule from '../views/games/rules/_id.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/test', name: 'test', component: Test, meta: {title: 'Test'}},
    {path: '/cart', name: 'cart', component: Cart, meta: {title: 'Cart'}},
    {path: '/about', name: 'about', component: About, meta: {title: 'About'}},
    {path: '/demo', name: 'demo', component: Demo, meta: {title: 'Demo'}},
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      meta: {title: 'Checkout'},
    },
    {
      path: '/games',
      component: Games,
    },
    {
      path: '/games/:id',
      name: 'Game',
      component: Game,
      children: [
        {
          path: 'rules',
          name: 'Game Rules',
          components: {page: Rules},
          meta: {showModal: false},
        },
        {
          path: 'rules/:ruleId',
          name: 'Game Rule',
          components: {page: Rules, rule: Rule},
          meta: {showModal: true},
        },
      ],
    },
    {path: '/:name?', component: Index},
    // {path: '/:slug?', component: Index},
  ],
})
