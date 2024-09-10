import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

// Importa Bootstrap JS e Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
