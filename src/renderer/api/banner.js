/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-09 22:54:09
 * @Description: banner
 */
import request from '@/utils/request.js'

export function getBanner () {
  return request.get('/banner')
}
