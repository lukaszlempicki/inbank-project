import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/default.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
