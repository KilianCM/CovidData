import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueResource from 'vue-resource';
import App from './App';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueResource);

// Base URL for API requests
Vue.http.options.root = 'https://api.covid19api.com';

new Vue({
  render: h => h(App),
}).$mount('#app')