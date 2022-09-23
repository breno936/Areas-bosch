import {createRouter, createWebHistory} from 'vue-router'
import HomePrincipal from '../views/HomePrincipal.vue'
import Areas from '../views/Areas.vue'

const routes=[
    {
    path:'/',
    name:'home',
    component:HomePrincipal
},
{
    path:'/areas',
    name:'areas',
    component:Areas
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router