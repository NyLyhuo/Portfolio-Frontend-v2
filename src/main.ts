import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from "./router";
import "./style.css";
import App from "./App.vue";
import { useAuthStore } from "./stores/auth";
import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(ToastPlugin);
const authStore = useAuthStore();
await authStore.init();

app.use(router);
app.mount("#app");
