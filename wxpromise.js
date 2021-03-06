/*
 * @Author: panrui
 * @Date: 2020-12-14 17:03:28
 * @LastEditors: panrui
 * @LastEditTime: 2021-07-27 10:12:23
 * @Description: 微信封装异步API
 */
import {
    asyncMethods
} from './methods'

// polyfill for finally
if (!Promise.prototype.finally) {
    Promise.prototype.finally = function (callback) {
        let P = this.constructor
        return this.then(
            value => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => {
                throw reason
            })
        )
    }
}
export const promisify = (api) => {
    return (args = {}) => {
        return new Promise((resolve, reject) => {
            api({
                fail: reject,
                success: resolve,
                ...args,
            })
        })
    }
}

export const resuestPromisify = (api) => {
    return (args = {}) => {
        return new Promise((resolve, reject) => {
            api({
                fail: reject,
                success: function (res) {
                    // 对请求接口统一处理
                    // TODO  resolve(res.data)
                },
                ...args,
            })
        })
    }
}

export const promisifyAll = () => {
    wx.pro = {}
    Object.keys(wx).forEach(key => {
        if (key == 'request') {
            wx.pro[key] = resuestPromisify(wx[key])
        } else if (asyncMethods.indexOf(key) >= 0) {
            wx.pro[key] = promisify(wx[key])
        } else if (key !== 'createSignal') {
            wx.pro[key] = wx[key]
        }
    })
}