const AuthRoute = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/modules/auth/views/LoginPage.vue'),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/modules/auth/views/RegisterPage.vue'),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/logout',
        name: 'logout',

    }
]

export default AuthRoute

