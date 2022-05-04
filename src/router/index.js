import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/unlogged-home')
    },
    {
        path: '/leaseholder',
        name: 'leaseholder',
        component: () => import('../components/posts')
    },
    {
        path: '/leaseholder/:id',
        name: 'detailed-post',
        component: () => import('../components/detailed-post')
    },
    {
        path: '/create-post',
        name: 'create-post',
        component: () => import('../components/create-post')
    },
    {
        path: '/post-succeed',
        name: 'post-succeed',
        component: () => import('../components/post-succeed')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/register')
    },
    {
        path: '/home-leaseholder/:profileId',
        name: 'home-leaseholder',
        component: () => import('../components/home-leaseholder')
    },
    {
        path: '/home-landlord/:profileId',
        name: 'home-landlord',
        component: () => import('../components/home-landlord')
    },
    {
        path: '/search-roomie',
        name: 'search-roomie',
        component: () => import('../components/search-roomie')
    },
    {
        path: '/favourite-posts',
        name: 'favourite-posts',
        component: () => import('../components/favourite-posts')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }
    next();
});

export default router