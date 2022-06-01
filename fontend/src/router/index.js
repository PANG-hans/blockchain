import {createApp} from 'vue';
import VueRouter from 'vue-router';
// import { } from "vue-router";
import App from "@/App";
import UsrPage from "@/view/UsrPage";
import HomePage from "@/view/HomePage";

const app = createApp(App)

const routes = [
    {path: '/', component: HomePage},
    {path: '/usr', component: UsrPage},
    // {path: '/', redirect: '/home'},
]
const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router)
router.isReady().then(() => app.mount('#app'))


