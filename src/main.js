import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'

const app = createApp(App);
app.use(store); //Adding the store before mount the new vue app.
app.mount('#app');