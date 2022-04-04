import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Chao from './components/Chao.vue';
import Frank from './components/Frank.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Chao },
        { path: '/Frank', component: Frank }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
