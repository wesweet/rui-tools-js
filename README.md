# rui-tools-js

JavaScripts 常用方法工具库

## GitHub 仓库

[github](https://github.com/wesweet/rui-tools-js)

### 提供的 API

#### 图片转成 base

传入图片对象,返回一个 promise 对象,在成功函数获取 base64

```js
getBase64(file);
```

#### 数组扁平化

将一个多维数组转换成一维数组

```js
// [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
flatten(array);
```

#### 一维对象数组转成树形结构数组

```js
let dataSource = [
  {
    id: 1,
    pid: 0,
    name: "一级菜单A",
  },
  {
    id: 2,
    pid: 0,
    name: "一级菜单B",
  },
  {
    id: 3,
    pid: 0,
    name: "一级菜单C",
  },
  {
    id: 4,
    pid: 1,
    name: "二级菜单A-A",
  },
  {
    id: 5,
    pid: 1,
    name: "二级菜单A-B",
  },
  {
    id: 6,
    pid: 2,
    name: "二级菜单B-B",
  },
  {
    id: 7,
    pid: 2,
    name: "二级菜单B-C",
  },
  {
    id: 8,
    pid: 6,
    name: "三级菜单B-B-A",
  },
  {
    id: 9,
    pid: 6,
    name: "三级菜单B-B-B",
  },
];
```

#### 删除对象数组中 指定属性的值为 value 的项

```js
[
  {
    id: 1,
    value: 2,
    children: [
      {
        id: 2,
        value: 3,
        children: [
          {
            id: 3,
            value: 4,
          },
        ],
      },
    ],
  },
];
```
