import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import App from './App';
import moment from 'moment';
import 'ant-design-vue/dist/antd.css';

import SummaryPage from "./components/SummaryPage";
import CountryDetailsPage from "./components/CountryDetailsPage";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueResource);
Vue.use(VueRouter);

// Base URL for API requests
Vue.http.options.root = 'https://api.covid19api.com';


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM-DD-YYYY hh:mm');
  }
});

const routes = [
  { path: '/', component: SummaryPage },
  { path: '/country', component: CountryDetailsPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
