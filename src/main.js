import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import HighchartsVue from 'highcharts-vue'
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080/api/';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['content-type'] = 'application/json';
//axios.defaults.headers = "Access-Control-Allow-Origin: '*'";
//axios.defaults.headers = "'Access-Control-Allow-Origin' = '*'";
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(HighchartsVue)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
