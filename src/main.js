import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store";
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: "#333333",
    cancelButtonColor: '#000000',
    background:"#fffae9",
    color:"#ffffff"
  };

createApp(App).use(router).use(store).use(VueSweetalert2,options).mount('#app')
