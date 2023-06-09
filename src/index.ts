/*
 * @Author: your name
 * @Date: 2023-06-09 15:14:43
 * @LastEditTime: 2023-06-09 16:00:31
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /vue-router-test/src/index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";

// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

console.log(router);
