import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(MotionPlugin);


app.mount("#app");
