import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './Switch/SwitchDemo.vue';
import ButtonDemo from './Button/ButtonDemo.vue';
import DialogDemo from './Dialog/DialogDemo.vue';
import TabsDemo from './Tabs/TabsDemo.vue';
import RadioDemo from './Radio/RadioDemo.vue';
import Intro from './views/Intro.vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import { h } from 'vue';

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string });
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '', component: Intro },
                { path: 'intro', component: md(intro) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'select', component: RadioDemo },
            ]
        },
    ]
});
