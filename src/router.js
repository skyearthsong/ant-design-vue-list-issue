import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import AdminDemo from './pages/AdminDemo.vue'
import User from './pages/User.vue'
import NotFound from './pages/NotFound.vue'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/admin', component: AdminDemo },
        { path: '/users/:id', component: User },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        // {
        //     path: '/doc', component: Doc, children: [
        //         { path: 'switch', component: SwitchDemo }
        //     ]
        // }
    ]
})
export default router;