const meta = { auth: true }

export default {
  path: '/cart',
  name: 'cart',
  meta,
  component: () => import('@/views/cart/cart.vue')
}