import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from "./router";
import "./style.css";
import App from "./App.vue";
import { useAuthStore } from "./stores/auth";


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
const authStore = useAuthStore();
await authStore.init();

app.use(router);
app.mount("#app");
