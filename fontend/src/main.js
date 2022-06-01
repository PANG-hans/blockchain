import { createApp} from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementUI);
app.use(ElementPlus);
app.mount('#app')
