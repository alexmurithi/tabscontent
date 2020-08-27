


require('./bootstrap');

window.Vue = require('vue');

// import routes //
import {router} from './router/router.js';
import {store} from './store/store.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import common from './common.js';
import {initialize} from './helper/general.js';

initialize(store, router);

Vue.use(ViewUI);
Vue.mixin(common);

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});





// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-app', require('./components/MainApp.vue').default);


const app = new Vue({
    el: '#app',
    // Require this router in our app//
    router,
    store,
});
