import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Index from '@/components/Index.vue'
import About from '@/components/About.vue'
import Appointment from '@/components/Appointment.vue'
import Blog from '@/components/Blog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Index',
          component: Index,
        },
        {
          path: 'About',
          name: 'About',
          component: About,
        },
        {
          path: 'Blog',
          name: Blog,
          component: Blog,
        },
        {
          path: 'Appointment',
          name: 'Appointment',
          component: Appointment,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Handle back/forward navigation
    if (savedPosition) {
      return savedPosition;
    }
    
    // Handle hash links (anchor navigation)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    
    // Default: scroll to top for route changes
    return { 
      top: 0, 
      behavior: 'smooth' 
    };
  },
})

export default router
