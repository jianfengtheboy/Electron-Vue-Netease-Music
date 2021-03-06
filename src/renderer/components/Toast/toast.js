/*
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 23:11:53
 * @Description: 通知弹框
 */
import Notification from './../base/notification'
let toastInstance

function getToastInstance () {
  toastInstance = toastInstance || Notification.newInstance()
  return toastInstance
}

const notice = function ({ content = '提示', icon = '', duration = 3 }) {
  let instance = getToastInstance()
  instance.notice({
    content,
    icon,
    duration
  })
}

export default notice
