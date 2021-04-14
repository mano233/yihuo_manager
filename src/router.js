import Vue from 'vue'
import VueRouter from 'vue-router'
// import main from "./main";
Vue.use(VueRouter)

const routes = [
    {
        // 会匹配所有路径
        path: '*',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./view/login')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./view/home'),
        children: [
            {
                path: 'user_list',
                name: 'user_list',
                component: () => import('./view/user_list')
            },
            {
                path: 'user_audit',
                name: 'user_audit',
                component: () => import('./view/user_audit')
            },
            {
                path: 'admin_list',
                name: 'admin_list',
                component: () => import('./view/admin_list')
            }
        ]
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
// router.beforeEach((to, from, next) => {
//     if (to.name === 'login') {
//         return next()
//     }
//     if (!localStorage.getItem('token')) {
//         next({path: '/login'})
//     } else {
//         next()
//     }
// })
export default router
