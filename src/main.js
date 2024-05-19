import { createApp } from 'vue'
import App from './App.vue'
import Vant from "vant";
import 'vant/lib/index.css';



const app = createApp();
app.use(Vant);

createApp(App).mount("#app");