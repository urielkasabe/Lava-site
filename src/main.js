import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { createRouter, createWebHistory } from "vue-router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import TheMenu from "./components/TheMenu.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/menu", component: TheMenu },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

const app = createApp(App);

app.use(ElementPlus);
app.use(MotionPlugin);
app.use(router);


app.mount("#app");
