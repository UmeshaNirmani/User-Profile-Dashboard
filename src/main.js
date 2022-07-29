import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// fontawesome configuration
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// bootstrap css, js configuration
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./style.css"; // main css file

createApp(App).use(store).use(router).mount("#app");
