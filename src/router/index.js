import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/system/Login.vue'
import NotFound from '@/views/system/404.vue'
import Index from '@/views/system/Index.vue'
import Main from '@/views/system/Main.vue'
Vue.use(Router);

export const routes = [
  { path: '/login', component: Login },
  { path: '/',component: Index,
    children: [
      { path: '/main', component: Main },
      { path: '/404', component: NotFound }
    ]
  },
  { path: '*',redirect: { path: '/404' } }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});
