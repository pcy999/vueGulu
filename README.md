# vue UI 组件库

[![Build Status](https://www.travis-ci.org/pcy999/vueGulu.svg?branch=main)](https://www.travis-ci.org/pcy999/vueGulu)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1.添加 css 样式
使用本框架前，请在 CSS 中开启 border-box

```
*，*::before，*::after{box-sizing:border-box;}
```

IE8 及以上浏览器都支持此样式。
你还需要设置默认颜色等变量（后续会改为 scss 变量）

```
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
```

IE15 及以上浏览器都支持此样式。

2.安装

```
npm i -S pcy20201209
```

3.引入方式

```
import { Button } from "pcy20201209";
import "pcy20201209/dist/index.css";

export default {
  name: "App",
  components: {
    // HelloWorld,
    "g-button": Button,
  },
};
```

4.引入 svg symbols

```
	<script src="//at.alicdn.com/t/font_2253259_hcsjwu2ypuj.js"></script>

```

## 文档

## 提问

## 编程记录

## 联系方式

## 贡献代码
