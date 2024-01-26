import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';
import pinia from './store';
import VueLazyload from 'vue-lazyload';
import loadimage from './assets/loading.gif';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueLazyload, {
	loading: loadimage,
});

app.mount('#app');
