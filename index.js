/*
 * @Description: 入口文件
 * @Author: panrui
 * @Date: 2021-03-15 10:14:11
 * @LastEditTime: 2021-03-19 11:22:15
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
   * 根节点需要保证为0
   * 将单维数组转换成树形结构
   * @param {*} source 元数组
   * @param {*} id 节点id
   * @param {*} parentId 父节点id
   * @param {*} children 挂载在父节点的字段
   */
  treeData(source, id, parentId, children) {
    let cloneData = JSON.parse(JSON.stringify(source)) //克隆数组
    return cloneData.filter(father => {
        let branchArr = cloneData.filter(child => father[id] == child[parentId]);
        debugger
        branchArr.length > 0 ? father[children] = branchArr : ''
        return father[parentId] == 0 
    })
  }
}