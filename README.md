# rui-tools-js

JavaScripts 常用方法工具库

## GitHub 仓库

[github](https://github.com/wesweet/rui-tools-js/issues)

### 提供的 API

#### 图片转成 base

传入图片对象,返回一个 promise 对象,在成功函数获取 base64
```js
getBase64(file)
```

#### 数组扁平化

将一个多维数组转换成一维数组
```js
flatten(array)
```

#### 普通数组转成树形结构数组
```js
treeData(source, id, parentId, children)
```

