/*
 * @Description: 入口文件
 * @Author: panrui
 * @Date: 2021-03-15 10:14:11
 * @LastEditTime: 2021-06-17 16:59:20
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
  },
  /**
   * 添加一个对象作为属性，如果后续该对象添加了属性，那么也会影响之前的
   * 将一维对象数组转换成树形结构对象数组
   * @param {*} source 一维对象数组
   * @param {*} parentId 数组项 父节点字段属性
   * @param {*} id 数组项 自己节点字段属性
   * @param {*} children 数组项 子节点字段属性
   */
  treeData(source, id, parentId, children) {
    let cloneData = JSON.parse(JSON.stringify(source)) //克隆数组
    return cloneData.filter(father => {
      let branchArr = cloneData.filter(child => father[id] == child[parentId]);
      branchArr.length > 0 ? father[children] = branchArr : ''
      return father[parentId] == 0 // 最顶层节点的父节点值 修改成你自己的值
    })
  },
  /**
   * 删除对象数组中 指定属性的值为 value的项
   * @param {*} data 
   * @param {*} value 
   */
  findItem(data, value) {
    data.forEach((item, index) => {
      if (item.key == value) {
        data.splice(index, 1)
      }
      if (item.children.length) {
        return this.findItem(item.children, value)
      }
    })
  }
}