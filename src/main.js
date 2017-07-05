// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import moment from 'moment'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false;
Vue.config.devtools 	 = false;

moment.locale('zh-cn');
Vue.prototype.moment = moment;

// Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

const msg_history = [{
	content: '',
	location: '',
	mine: true,
	initDate: '',
	userName: ''
}];
