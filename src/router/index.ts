import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SemesterGPA',
    component: () => import('@/views/SemesterGPA.vue'),
    meta: { title: 'Semester GPA Calculator' }
  },
  {
    path: '/overall-cgpa',
    name: 'OverallCGPA',
    component: () => import('@/views/OverallCGPA.vue'),
    meta: { title: 'Overall CGPA Calculator' }
  },
  {
    path: '/developer',
    name: 'Developer',
    component: () => import('@/views/Developer.vue'),
    meta: { title: 'Developer Profile' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title based on route
router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title || 'FCUB'} - CGPA Calculator`
  next()
})

export default router