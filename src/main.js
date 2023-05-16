import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion';
import {createRouter, createWebHistory} from 'vue-router';

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ContactUs from "./components/ContactUs.vue";
import App from "./App.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [ { path: '/', component: App },
    {path: '/contact-us', component: ContactUs},
    { path: '/:notFound(.*)', redirect: '/' }
],
scrollBehavior(to, from, savedPosition) {
    console.log(to, from);
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 };
    }
    
  }
});



const app = createApp(App);

app.use(ElementPlus);
app.use(MotionPlugin);
app.use(router);


app.mount("#app");
