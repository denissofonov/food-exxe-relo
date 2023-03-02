import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Button from '@/components/ui/Button.vue'

createApp(App).component('Button', Button).use(router).mount('#app')
