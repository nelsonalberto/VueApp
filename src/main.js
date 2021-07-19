import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './routes'

const app = createApp(App);

app.use(store); //Adding the store before mount the new vue app.
app.use(router); //Indicating we will use routes.

app.mount('#app');