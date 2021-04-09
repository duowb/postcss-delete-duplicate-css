# Postcss Delete Duplicate Css [<img src="http://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][PostCSS] 

<!-- [![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Coverage Status][cov-img]][cov-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url] -->

[PostCSS] 可以删除文件中重复的css.

**此插件不会改变原始的css文件，只是在打包的时候会删除重复的样式**

**这样写:**

```css
.foo {
  width: 100px;
  height: 100px;
}

.foo{
  height: 100px;
  width: 100px;
}
```

**变成这样:**

```css
.foo {
  width: 100px;
  height: 100px;
}
```

## 安装方式

`$ npm install postcss-delete-duplicate-css`

## 使用方式

```JS
postcss([ require('postcss-delete-duplicate-css') ])
```

查看 [PostCSS](https://github.com/postcss/postcss) 文档 [examples regarding usage](https://github.com/postcss/postcss#usage).

## 参数

### `isRemoveNull`

- Type: `boolean`
- Default: `false`
 
是否删除空的样式

**这样写:**
``` css 
  .foo {
    width: 100px;
  }

  div {}
```
**变成这样:**
```css
  .foo{
    width: 100px
  }
```

### `isRemoveComment`  

- Type: `boolean`
- Default: `false`
 
 是否删除所有的注释

 **这样写:**

```css
/*This is the comment*/
 div {
   width: 100px;
   height: 100px;
 }
```
**变成这样:**

```css
 div {
   width: 100px;
   height: 100px
 }
```




## 测试

可以通过以下命令运行测试:

`$ npm run test`


[npm-url]: https://www.npmjs.com/package/postcss-replace
[npm-img]: https://img.shields.io/npm/v/postcss-replace.svg
[cli-url]: https://travis-ci.org/gridonic/postcss-replace
[cli-img]: https://travis-ci.org/gridonic/postcss-replace.svg
[lic-url]: LICENSE
[lic-img]: https://img.shields.io/npm/l/postcss-replace.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[cov-url]: https://coveralls.io/github/gridonic/postcss-replace?branch=master
[cov-img]: https://coveralls.io/repos/github/gridonic/postcss-replace/badge.svg?branch=master

[PostCSS]: https://github.com/postcss/postcss
