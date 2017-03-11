import Router from 'vue-router'
const routes = [{
  path: '/my/dist',
  redirect: '/'
}, {
  path: '/',
  component: resolve => require(['../views/index.vue'], resolve)
}]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/') {
    window.location = `https://dribbble.com${to.fullPath}`
    next()
  } else {
    next()
  }
})

export default router
