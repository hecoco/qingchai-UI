import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Intro from './views/Intro.vue';
import install from './views/Install.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';



const history = createWebHashHistory();
const md = path => h(Markdown, { path: path, key: path });
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'intro', component: Intro },
                { path: 'install', component: install },
                { path: 'get-started', component: md('../markdown/get-started.md') },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },

            ]
        },
    ]
});
