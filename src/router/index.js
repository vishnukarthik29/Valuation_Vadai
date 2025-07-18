import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Index from '@/components/Index.vue'
import About from '@/components/About.vue'
import Appointment from '@/components/Appointment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
          path: '/About',
          name: 'About',
          component: About,
        },
        {
          path: '/Appointment',
          name: 'Appointment',
          component: Appointment,
        },
      ],
    },
  ],
})

export default router
