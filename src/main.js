// import { createApp } from 'vue'
// import '../src/StyledComponents/style.css'
// import App from './App.vue'
// import 'vue-toastification/dist/index.css'




// createApp(App).mount('#app')



import { createApp } from 'vue';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '../src/StyledComponents/style.css';

const app = createApp(App);

app.use(Toast, {
  // You can set your default options here
});

app.mount('#app');
