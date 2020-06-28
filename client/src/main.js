import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueToasted from 'vue-toasted';
import moment from 'moment'
Vue.config.productionTip = false;

Vue.prototype.moment = moment;
Vue.use(VueToasted, {
  iconPack:'fontawesome'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
