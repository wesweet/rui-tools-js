/*
 * @Description: 入口文件
 * @Author: panrui
 * @Date: 2021-03-15 10:14:11
 * @LastEditTime: 2021-03-17 18:22:46
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */

export default {
  /**
   * 将图片转换成base64
   * @param {*} file 
   * @returns 
   */
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  },
  /**
   * 函数扁平化
   * @param {*} array 
   */
  flatten(array) {
    return array.reduce(function (pre, item) {
      return pre.concat(Array.isArray(item) ? flatten(item) : item);
    }, [])
  }
}