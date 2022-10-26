// 引入vue
import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';
// 引用page1页面
import page1 from './components/TextShow.vue';
// 引用page1页面
import page2 from './components/Img.vue';
// 引用page2页面
import page3 from './components/QunVideo.vue';
// 第三方库需要use一下才能用
Vue.use(VueRouter)

// 定义routes路由的集合，数组类型
const routes = [
  // 单个路由均为对象类型，path代表的是路径，component代表组件，meta自定义json格式参数集合，
  { path: '/page1', component: page1, meta: { anim: 'left' } },
  { path: '/page2', component: page2, meta: { anim: 'right' } },
  { path: '/page3', component: page3, meta: { anim: 'right' } }
]
// 实例化VueRouter并将routes添加进去
const router = new VueRouter({
  // 路由解析方式
  mode: 'hash',
  // ES6简写，等于routes：routes
  routes
});
// 抛出这个这个实例对象方便外部读取以及访问
export default router
