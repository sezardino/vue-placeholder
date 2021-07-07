import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// components
import components from "@/components/UI";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store);
app.use(router);
app.mount("#app");
