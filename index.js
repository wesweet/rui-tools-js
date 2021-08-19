/*
 * @Description: 入口文件
 * @Author: panrui
 * @Date: 2021-03-15 10:14:11
 * @LastEditTime: 2021-08-19 11:31:45
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */

// 匹配正整数
function isPositiveNum(val) {
  return /^[1-9]\d*$/.test(val);
}

// 匹配负整数
function isNegativeNum(val) {
  return /^-[1-9]\d*$/.test(val);
}

// 匹配整数
function isInteger(val) {
  return /^(-|\+)?\d+$/.test(val);
}

// 匹配非负浮点数
function isNotNegativeFloatNum(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

// 匹配电子邮件地址
function isEmailAddress(val) {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
}

// 验证中文和数字
function isCHNAndEN(val) {
  return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(val);
}

// 校验邮箱编码
function isPostcode(val) {
  return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(val)
}

// 验证微信号
function isWeChatNum(val) {
  return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(val)
}

// 验证统一社会信用代码
function isCreditCode(val) {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(val)
}

// 验证银行卡号
function isAccountNumber(val) {
  return /^[1-9]\d{9,29}$/g.test(val)
}

// 验证中文姓名
function isChineseName(val) {
  return /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(val)
}

// 校验车牌号
function isLicensePlateNumber(val) {
  return /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(val)
}

// 检验手机号
function isMPStrict(val) {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(val)
}

// 校验手机号 宽松
function isMPRelaxed(val) {
  return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value)
}

// 校验email(邮箱)
function isEmail(val) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(val)
}

// 校验座机电话
function isLandlineTelephone(val) {
  return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(val)
}

// 校验身份证
function isIDCard(val) {
  return /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(val)
}

// 校验护照
function isPassport(val) {
  return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(val)
}

// TODO 浏览器相关

/**
 * 获取url参数
 * @param {*} name 
 * @param {*} origin 
 * @returns 
 */
function getUrlParam(name, origin) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

// 获取窗口可视范围的高度
function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  } else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
}

// 获取窗口可视范围宽度
function getPageViewWidth() {
  const d = document;
  const a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}

// 获取窗口宽度
function getPageWidth() {
  const g = document;
  const a = g.body;
  const f = g.documentElement;
  const d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

// TODO 数组相关检测

// 返回数组中最大值
function arrayMax(arr) {
  return Math.max(...arr)
}

// 返回数组中最小值
function arrayMin(arr) {
  return Math.min(...arr)
}

// 从数组中移除 false 值
function compact(arr) {
  return arr.filter(Boolean)
}

// 计算数组中指定值出现次数
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
}

// 函数扁平化
function flatten(array) {
  return array.reduce(function (pre, item) {
    return pre.concat(Array.isArray(item) ? flatten(item) : item);
  }, [])
}

// 数组去重
function distinctValuesOfArray(arr) {
  return [...new Set(arr)]
}

// 将图片转成base
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}



/**
 * 添加一个对象作为属性，如果后续该对象添加了属性，那么也会影响之前的
 * 将一维对象数组转换成树形结构对象数组
 * @param {*} source 一维对象数组
 * @param {*} parentId 数组项 父节点字段属性
 * @param {*} id 数组项 自己节点字段属性
 * @param {*} children 数组项 子节点字段属性
 */
function treeData(source, id, parentId, children) {
  let cloneData = JSON.parse(JSON.stringify(source)) //克隆数组
  return cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father[id] == child[parentId]);
    branchArr.length > 0 ? father[children] = branchArr : ''
    return father[parentId] == 0 // 最顶层节点的父节点值 修改成你自己的值
  })
}

/**
 * 删除对象数组中 指定 key 的值为 value 的项
 * @param {对象数组} data 
 * @param {对象的key} key 
 * @param {key对应的value} value 
 */
function findItem(data, key, value) {
  data.forEach((item, index) => {
    if (item[key] == value) {
      data.splice(index, 1)
    }
    if (item.children.length) {
      return findItem(item.children, key, value)
    }
  })
}

export default {
  isPositiveNum,
  isNegativeNum,
  isInteger,
  isNotNegativeFloatNum,
  isEmailAddress,
  getBase64,
  flatten,
  treeData,
  findItem
}