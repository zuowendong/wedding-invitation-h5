import App from "./App.vue";
import { createApp } from "vue";
import "@varlet/touch-emulator";
import { i18n } from "@/lang";

createApp(App).use(i18n).mount("#app");
