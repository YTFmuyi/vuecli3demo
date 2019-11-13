import homepage from './modules/homepage'
import cart from './modules/cart'

/**
 * 在主框架内显示
 */
const frameIn = [
    {
        path: '/',
        redirect: { name: 'homepage' },
    },
    // 刷新页面
    {
        path: '/refresh',
        name: 'refresh',
        hidden: true,
        component: () => import('@/views/system/function/refresh/refresh.vue'),
    },
    homepage,
    cart
]

/**
 * 在主框架之外显示
 */
const frameOut = [
]

/**
 * 错误页面
 */
const errorPage = [
    // {
    //     path: '*',
    //     name: '404',
    //     component: _import('system/error/404/index.vue')
    // }
]

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut,
    ...errorPage
]
