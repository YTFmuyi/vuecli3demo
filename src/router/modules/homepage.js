const meta = { auth: true }

export default {
  path: '/homepage',
  name: 'homepage',
  meta,
  redirect: { name: 'homepage-home-child1' },
  component: () => import('@/views/homepage/homepage.vue'),
  children: (() => [
    {
      path: 'home-child1',
      name: `homepage-home-child1`,
      component: () => import('@/views/homepage/home-child1.vue'),
      meta: {
        ...meta,
        title: 'child1'
      }
    }
  ])()
}