# Postcss Delete Duplicate Css [<img src="http://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][PostCSS] 

<!-- [![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Coverage Status][cov-img]][cov-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url] -->

**中文**:  [`README-cn.md`](./README-cn.md)

[PostCSS] plugin for delete duplicate css in the file.

**This plugin will not change the original css file, but delete the duplicate styles when packaging**

**Write this:**

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

**And get this:**

```css
.foo {
  width: 100px;
  height: 100px;
}
```

## Installation

`$ npm install postcss-delete-duplicate-css`

## Usage

```JS
postcss([ require('postcss-delete-duplicate-css') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for [examples regarding usage](https://github.com/postcss/postcss#usage).

## Options

### `isRemoveNull`

- Type: `boolean`
- Default: `false`
 
Whether to delete empty styles

**Write this:**
``` css 
  .foo {
    width: 100px;
  }

  div {}
```
**And get this:**
```css
  .foo{
    width: 100px
  }
```

### `isRemoveComment`  

- Type: `boolean`
- Default: `false`
 
 Whether to delete all comments

 **Write this:**

```css
/*This is the comment*/
 div {
   width: 100px;
   height: 100px;
 }
```
**And get this:**

```css
 div {
   width: 100px;
   height: 100px
 }
```




## Testing

Tests can be run via the following command:

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
