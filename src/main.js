import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ant from 'ant-design-vue';
import component from '@/components/components.js';
import moment from 'moment'
import './assets/less/reset.less';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.use(ant);
Vue.use(component);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')