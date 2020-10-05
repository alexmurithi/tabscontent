


require('./bootstrap');

import Vue from 'vue';
import MainApp from './components/MainApp.vue';

// import routes //
import {router} from './router/router.js';
import {store} from './store/store.js';


import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';
import common from './common.js';
import {initialize} from './helper/general.js';

import VueTelInput from "vue-tel-input";
import VueToastr from "vue-toastr"




initialize(store, router);
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

Vue.use(VueTelInput);
Vue.use(ViewUI,{ locale });
Vue.mixin(common);
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});







// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('main-app', require('./components/MainApp.vue').default);


// const app = new Vue({
//     el: '#app',
//     // Require this router in our app//
//     router,
//     store,
    
// });

new Vue({
  render: h => h(MainApp),
  router,
  store
}).$mount("#app");
