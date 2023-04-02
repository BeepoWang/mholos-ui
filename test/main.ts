import { createApp } from 'vue'
import App from './App.vue'
import mholosUI from '@mholos/components'

const app = createApp(App)

app.use(mholosUI)

app.mount('#app')


