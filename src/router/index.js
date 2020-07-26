import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base:'',           //根目录
  scrollBehavior (to, from, savedPosition) {
      if(savedPosition){
        return savedPosition
      }else{
        return { x: 0, y: 0 }
      }                         //<!-- 如果这个页面浏览过 那么回到浏览的位置 否者回到 0 0位置-->
	},
  routes: [
      {path: '/',redirect: '/index'},   //首页
      {path: '/index',name: 'index',component:()=>import('@/views/index.vue')},///首页
      {path: '/list',name: 'list',component:()=>import('@/views/list.vue')},//列表
      {path: '/about',name: 'about',component:()=>import('@/views/about.vue')},//详情
  ]
})
