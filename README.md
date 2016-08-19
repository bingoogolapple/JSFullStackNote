JavaScript 全栈案例
============

```
npm init
```
####初始化后端

```
npm install --save express
npm install --save formidable
npm install --save mongoose
npm install --save mongodb
```

####初始化前端

>安装JSPM

```
npm install jspm -g
npm install jspm --save-dev
```
>初始化JSPM

```
➜  js-full-stack-demo git:(master) ✗ jspm init                  
Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
Enter server baseURL (public folder path) [./]:public
Enter jspm packages folder [public/jspm_packages]:
Enter config file path [public/config.js]:
Enter client baseURL (public folder URL) [/]:
Do you wish to use a transpiler? [yes]:
Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:
```
>安装前端第三方库

```
jspm install react
jspm install react-dom
jspm install react-router

jspm install semantic-ui
jspm install css
jspm install jquery

jspm install npm:silly-datetime
```
>安装前端构建工具Browsersync + Gulp.js

```
npm install browser-sync gulp --save-dev

gulp
```

####相关连接

* [JSPM官网](http://jspm.io/)
* [JSPM文档](http://jspm.io/docs/getting-started.html)
* [Browsersync官网](https://browsersync.io/)
* [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp/)
* [silly-datetime](https://github.com/csbun/silly-datetime)
* [gulp官网](http://gulpjs.com/)