<!--
 * @Author: jun.fu
 * @LastEditors: jun.fu
 * @Description: file content
 * @Date: 2020-09-20 20:50:19
 * @LastEditTime: 2020-09-20 21:02:02
 * @FilePath: \mycli\README.md
-->

# 自定义的一个模仿 vue2 的脚手架

## 安装

```shell
npm i @signdigit1/mycli -g
```

## 使用

### 添加 template

```shell
mycli add
```

模板地址格式为：

- GitHub - github:owner/name or simply owner/name
- GitLab - gitlab:owner/name
- Bitbucket - bitbucket:owner/name

### 创建项目

```shell
mycli init templateName
```

### 列出模板

```shell
mycli list
```

### 删除模板

```shell
mycli delete templateName
```

## 参考

[仿 vue-cli 搭建一个自己的脚手架](https://blog.csdn.net/weixin_43820866/article/details/102768255)
