/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-09 13:13:28
 * @LastEditTime: 2020-04-09 13:16:24
 * @Description: vue-lazyload
 */
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 使用IntersectionObserver监听
  observer: true,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})