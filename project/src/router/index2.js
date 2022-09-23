import {createRouter, createWebHistory} from 'vue-router'
import HomePrincipal from '../views/HomePrincipal.vue'
import HomeArea from '../ViewsArea/HomeArea.vue'
import Members from '../ViewsArea/MembersArea.vue'

const routes=[
    {
    path:'/',
    name:'home',
    component:HomePrincipal
},
{
    path:'/homeArea',
    name:'homeArea',
    component:HomeArea
},
{
    path:'/membersArea',
    name:'membersArea',
    component:Members
}
]

const routerArea = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default routerArea