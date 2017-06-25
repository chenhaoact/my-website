# 陈浩的个人网站

## 所用技术：
前端：
es6 (webpack工程环境配置支持每年最新版本的es6语法，如2017年支持es2017)
react
redux
antd": "^2.9.3"
https://ant.design/docs/react/introduce-cn

服务端：
"koa": "^2.2.0"

## 命令

运行
npm run dev
http://localhost:8080

构建打包
npm run build

# 前端

##二 搭建参考

### webpack:

webpack & react项目搭建一：环境
http://www.jianshu.com/p/98c22488cf56

一小时包教会 —— webpack 入门指南：
http://www.w2bc.com/Article/50764

目前已升级到webpack2

### ESLint:

webstorm nodejs ESLint 简单配置
http://blog.csdn.net/whitehack/article/details/52422873

在React+Babel+Webpack环境中使用ESLint
http://www.cnblogs.com/le0zh/p/5619350.html


### react-router:

react-router中文文档
http://react-guide.github.io/react-router-cn/


### redux:

redux中文文档
http://www.redux.org.cn/

redux中文文档基础示例代码
http://www.redux.org.cn/docs/basics/ExampleTodoList.html


Redux 入门教程（一）：基本用法
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

react-redux使用：
http://www.redux.org.cn/docs/react-redux/quick-start.html

### scss中文文档：
http://sass.bootcss.com/docs/sass-reference/


## 代码参考：

A blog build with Koa2 and React.
https://github.com/hojas/rblog

React开发在线聊天室V2.1
https://github.com/redsx/CR



ESlint使用：
http://www.jianshu.com/p/2bcdce1dc8d4

使用的airnab规范，


##三 代码结构



### package.json

scripts 下是定义npm的命令并制定脚本，如（dev build test）

```
"scripts": {
    "dev": "webpack-dev-server --progress --profile --colors --hot --inline",
    "build": "webpack --progress --profile --colors",
    "test": "test",
  },
```

### webpack.config.js

文件路径定义,视代码结构灵活调整:

```
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'app/build');
const PAGE_PATH = path.resolve(ROOT_PATH, 'app/pages');
```

module.exports= {} 中是webpack的一些配置项：

entry:

output:

devServer: 服务器的配置（如：端口，热加载等）

plugins: 指定一些插件的使用，如：


指定默认的页面在PAGE_PATH下的index.html

```
    new HtmlwebpackPlugin({
        title: 'My first react app',
        template: path.resolve(PAGE_PATH, 'index.html'),
        filename: 'index.html',
        chunks: ['app', 'vendors'],
        inject: 'body'
    }),
```

使用了插件webpack-bundle-analyzer来可视化分析包的大小：https://github.com/th0r/webpack-bundle-analyze


#### webpack优化：

（1）ant-d按需加载(使用babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件：
https://ant.design/docs/react/use-with-create-react-app-cn 参考高级配置和按需加载部分

实践后，app.js从 14.8MB 降到 4.79MB,vendors.js为1.25MB! 看来正确的按需加载和引用ant-d等组件库对性能很重要。

（2）使用一些webpack插件减小打包文件大小，提升性能
基于 Webpack 的应用包体尺寸优化
https://zhuanlan.zhihu.com/p/24928279
和
简单几步助你优化React应用包体
https://segmentfault.com/a/1190000007692543

实践后，文件进一步减小，其中：

在生产环境中将NODE_ENV设置为production
app.js从4.79MB降到4.63MB,vendors.js为1.25MB

使用new webpack.optimize.DedupePlugin()后
app.js从降到4.51MB,vendors.js为1.25MB

使用new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), 用于忽略引入模块中并不需要的内容，减少打包文件大小，提升性能。譬如当我们引入moment.js时，我们并不需要引入该库中所有的区域设置，因此可以利用该插件忽略不必要的代码。
app.js为4.51MB,而vendors.js则由1.25MB大幅度降到329kB（看来原来的vendors.js中moment不需要的部分就占了一大部分）

使用compression-webpack-plugin插件后,将资源文件压缩为.gz文件，并且根据客户端的需求按需加载
build目录多出来了app.js.gz（1.09 MB）和vendors.js.gz（80.1 kB），可以看出，使用gz压缩后的文件比原文件小了很多
由于我的服务端使用的是koa的koa-static（https://github.com/koajs/static）来加载静态资源，gzip Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
所以如果有gzip的压缩文件会默认去解析，从而提升应用的性能。

经过这些步骤，在服务端node应用的加载所有前端资源的时间有一开始的近1min,变为了1.64s,很大的提升了性能和体验

#### 升级webpack2
升级到webpack2,具体参考了webpack2官网的迁移和配置部分。

#### 支持多页面



### .editorconfig

编辑器配置
http://editorconfig.org

### .gitignore


### .eslintignore 

让eslint忽略检测的文件 .eslintignore 配置规则与 .gitignore 一样 

### app/src
客户端的源代码。

！！注意：把前端逻辑代码放在app/src下并和app/build同级是为了和其他的纯前端项目保持一致，
另外打包的入口只包含app/src，而不把app/build的文件也混进去打包处理！！


#### containers与components
都分了containers（有数据逻辑，调用视图组件渲染）和components(里的
组件完全只负责视图渲染，不涉及数据逻辑（提供回调函数），以保证components具有高可复用性)

也就是说和components里全部是通用逻辑，可以在任何地方进行复用，而containers里才能写特殊逻辑

一级container下的index.jsx中一律只使用this.pros.children去调用子container,
不写任何的渲染或数据逻辑,reducer和actions也是下载二级container下的具体的某个container中。

#### pages支持多页面
添加一个页面参考page2

#### utils 共用工具类代码

如utils/scss下的iconfont.scss是引入iconfont

#####引入iconfont

目前使用的是推荐的symbol引用方式。

（1）在index.html下引用了iconfont图标项目的symbol生成的js，如果图标更新，js地址需要更新。

```
<script type="text/javascript" src="//at.alicdn.com/t/font_2h7z58z91azia4i.js"></script>
```

（2）在utils/scss下的iconfont.scss中

```
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
```

（3）使用的时候

```
{/*通过推荐的symbol引用方式引入iconfont，可以设置图标彩色等属性*/}
<svg class="icon" aria-hidden="true">
  <use xlinkHref="#icon-weibo"></use>
</svg>
```

注意：
因为是在react项目中引入，这里的xlink:href需要改成xlinkHref,class要改成className才会起作用
（因为react中的属性名要用驼峰法），aria-hidden则不需要改成驼峰法（react还不支持该属性）。

图标样式可以使用一般的css对字体的样式来控制，
比如设置该svg父元素的font-size，color属性等控制字体的大小，颜色等。
（直接设置svg的字体样式有的不能起作用因为svg和字体的样式属性不同）

也可以直接使用svg的样式控制，具体参考svg中use元素引用symbol样式的思考
http://blog.csdn.net/xiaozhu2hao/article/details/53183743

（4）其他页面如果也要使用iconfont

共用同一个iconfont项目：
就引入该js和iconfont.scss。

不同的iconfont项目：
安装上述步骤新引入对应iconfont的js和scss。


iconfont使用具体参考：http://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a.qUloTK&helptype=code


### app/build
客户端构建打包后的资源文件（服务端server会用到）



redux:

以work/containers/cardArea下的reducer和action为准

routeConfig


##UI组件库

ant-design(整体使用)
https://ant.design/docs/react/introduce-cn

material-ui(部分使用，material-ui一些组件要比ant-d更强大，漂亮)
http://www.material-ui.com/#/get-started


# 服务端

## 本地运行启动服务（直接用node服务,更新和调试较方便，不需要用pm2）

进入server目录：
node index.js

访问：http://localhost:8686/

## 云服务器上运行服务：

本来使用的是forever让nodejs应用后台执行：
https://cnodejs.org/topic/5021c2cff767cc9a51e684e3
http://blog.fens.me/nodejs-server-forever/

后来改成了更强大的pm2，和forever相比pm2有更多的支持，详细可以参考：

告别node-forever,拥抱PM2：
http://www.oschina.net/translate/goodbye-node-forever-hello-pm2?cmp
PM2 介绍：
https://www.douban.com/note/314200231/

使用PM2：

每次代码更新传到服务器后，都需要在服务器命令行中使用命令重新部署（0s停机）：
pm2 reload all         
进行0秒停机重载进程 (用于 NETWORKED 进程)

然后访问 http://chenhaoact.com


## 搭建参考

koa2文档
https://github.com/koajs/koa/blob/v2.x/Readme.md

廖雪峰的koa2入门教程：
http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000

koa-router：
https://github.com/alexmingoia/koa-router/tree/master

Node.js最新Web技术栈（2016年4月）
https://cnodejs.org/topic/56fdf66ec5f5b4a959e91771

## 服务端

入口文件index.js 和 app.js

## controllers

从app.js中拆分controller逻辑出来，处理各个url的请求

TODO???  以 controllers/index.js为范例

原本尝试了下使用模板引擎也走通了，但最后决定先不使用模板引擎，前后端完全分离，前端通过数据接口访问数据
如果要使用ejs模板引擎，请参考：
https://chenshenhai.github.io/koa2-note/note/template/add.html


使用了koa-static中间件实现静态资源服务器（以加载js,css,图片等静态资源），参考：
（需要先npm安装koa-convert和koa-static）
https://chenshenhai.github.io/koa2-note/note/static/middleware.html

这里把静态资源的路径设置到了/app/build下,即前端项目的build目录下，这样前端项目修改后直接npm run build后就可以生效，
不涉及前端文件的再拷贝，js，css.图片，文件等资源都统一指向到/app/build目录下,服务器上的资源文件则是直接通过 域名/静态资源文件 拿到
页面也通过静态资源输出，如index.html为首页，以后想要其他的页面直接新增即可：

const path = require('path')
const convert = require('koa-convert')
const statics = require('koa-static')

// 静态资源目录对于相对入口文件index.js的路径
const staticsPath = '../app/build'

// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(statics(
  path.join( __dirname,  staticsPath)
)))


## 分枝版本说明
use-webpack1 原先使用webpack1搭建，留存一份日后涉及webpack1可参考
daily/0.0.1  从webpack1升级到webpack2

