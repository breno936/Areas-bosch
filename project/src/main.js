import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import './assets/css/nav.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import router from './router/index.js'
import router2 from './router/index2.js'


function ViewApp1(){
createApp(App).use(router).mount('#app')
}

 // eslint-disable-next-line no-unused-vars
function ViewApp(aux){
if(aux == true){
document.getElementById('app').innerHTML = "";
createApp(App2).use(router2).mount('#app');
}else{
document.getElementById('app').innerHTML = "";
createApp(App).use(router).mount('#app')

}
}

ViewApp1();
export default ViewApp;
