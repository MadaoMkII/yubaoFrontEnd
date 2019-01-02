// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//import VuePaginate from 'vue-paginate' 
import Paginate from 'vuejs-paginate'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
//Vue.use(VuePaginate)
Vue.component('paginate', Paginate)

Vue.use(ElementUI);
Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
