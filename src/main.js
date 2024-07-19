import { createApp } from 'vue';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '../src/StyledComponents/style.css';

const app = createApp(App);

app.use(Toast, {
});

app.mount('#app');
