import Vue from 'vue';
import App from './App.vue';

// import App from './index.vue'
// 引用router.js
import router from './router.js'
// Vue.config.productionTip = false



// 导入组件库
import VueMiniPlayer from '../packages/index';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// Vue.prototype.$video = Video

// 注册组件库
Vue.use(VueMiniPlayer);
// Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
