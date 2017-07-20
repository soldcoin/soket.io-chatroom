// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import io from 'socket.io-client'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.config.devtools 	 = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
