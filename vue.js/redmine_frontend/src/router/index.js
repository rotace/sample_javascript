/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const allRoutes = routes.concat([
  {
    path: '/issues/:id',
    name: 'Get Issue',
    component: () => import('@/views/IssueGet.vue'),
  },
  {
    path: '/issues/:id/edit',
    name: 'Edit Issue',
    component: () => import('@/views/IssueEdit.vue'),
  },
  {
    path: '/projects/:id',
    name: 'Get Project',
    component: () => import('@/views/ProjectGet.vue'),
  },
  {
    path: '/projects/:id/issues',
    name: 'Get Project Issues',
    component: () => import('@/views/ProjectIssuesGet.vue'),
  },
])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(allRoutes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
