# 快速开始

```sh
// 在任意一个有markdown文件的目录执行
npx unmono doc --dev
```

🎉 将会在`http://localhost:5001` 中预览到所有文档 

或者直接查看[本项目文档网站](https://leookun.github.io/unmono/)，它是由unmono自构建的 <br/>

或者尝试clone下这些博客后为ta构建在线文档：

* https://github.com/mqyqingfeng/Blog
* https://github.com/fouber/blog

## 标题和目录

在 markdown 开头加入以下信息，即可以将文档分组
```
---
title: 安装
group: 快速开始
---
```

## 目录排序
例如您拥有以下目录，在文件名开头添加数字，即可调整文件在菜单中的顺序，数字越大越靠后
```
├── README.md
├── components
│   ├── 04按钮组件.md
│   ├── 04输入框组件.md
├── docs
│   ├── 01快速开始.md
│   ├── 02构建组件库.md
│   ├── 03Markdown语法.md

```




##  支持命令

| 命令         | 修饰符  |                   描述 |
| ------------ | :-----: | ---------------------: |
| unmono doc   |  --dev  |         扫描文档并预览 |
| unmono doc   | --build |   将文档构建为静态网站 |
| unmono build |         | [构建组件库](./explame/docs/02构建组件库.md) |

