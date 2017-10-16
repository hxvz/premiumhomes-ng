import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Services from '@/components/Services'
import Teams from '@/components/Teams'
import Partners from '@/components/Partners'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
    	path: '/services',
    	name: 'Services',
    	component: Services
    },
    {
    	path: '/teams',
    	name: 'Teams',
    	component: Teams
    },
    {
    	path: '/partners',
    	name: 'Partners',
    	component: Partners
    },
    {
    	path: '/products',
    	name: 'Products',
    	component: Products
    }
  ]
})
