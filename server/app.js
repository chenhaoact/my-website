/**
 * Created by chenhaoact on 2017/2/2.
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

/**
 * 目前先不适用模板引擎，前后端完全分离，前端通过数据接口访问数据
 * 如果要使用ejs模板引擎，参考：
 * https://chenshenhai.github.io/koa2-note/note/template/add.html
 * */
// const path = require('path')
// const views = require('koa-views')
// // 加载模板引擎
// app.use(views(path.join(__dirname, './views'), {
//   extension: 'ejs'
// }));
//
// app.use( async ( ctx ) => {
//   let title1 = 'hello koa2' //这里定义一个变量，放在下面的render里就会带给ejs模板引擎
//   await ctx.render('index', {
//     title1,
//   })
// })



/**
 * 使用koa-static中间件实现静态资源服务器（以加载js,css,图片等静态资源），参考：
 * https://chenshenhai.github.io/koa2-note/note/static/middleware.html
 * static在严格模式下是保留字，所以换成statics
 * 这里把静态资源的路径设置到了/app/build下,即前端项目的build目录下，这样前端项目修改后直接npm run build后就可以生效，不涉及前端文件的再拷贝，js，css.图片，文件等资源都统一指向到/app/build目录下
 * 页面也通过静态资源输出，如index.html为首页，以后想要其他的页面直接新增即可
 * */
const path = require('path')
const convert = require('koa-convert')
const statics = require('koa-static')

// 静态资源目录对于相对入口文件index.js的路径，服务器上的资源文件则是直接通过 域名/静态资源文件 拿到
const staticsPath = '../app/build'

// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(statics(
  path.join( __dirname,  staticsPath)
)))



// 安装引入该middleware来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
// 由于middleware的顺序很重要，koa-bodyparser中间件必须在router之前被注册到app对象上
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


// 引入koa-router,注意require('koa-router')返回的是函数:
const router = require('koa-router')();


// 对于任何请求，app将调用该异步函数处理请求：
// 每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数
app.use(async (ctx, next) => {
  /**
   * koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，
   * 然后用await next()来调用下一个async函数。
   * 每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能
   *
   * middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。
   * 此外，如果一个middleware没有调用await next()，后续的middleware将不再执行了。
   * 如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：
   *
   * app.use(async (ctx, next) => {
   * if (await checkUserPermission(ctx)) {
   *     await next();
   * } else {
   *     ctx.response.status = 403;
   * }
   * });
   * */
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

/**
 * 有一个能集中处理URL的middleware，它根据不同的URL调用不同的处理函数，这样，我们才能专心为每个URL编写处理函数。
 * 为了处理URL，我们需要引入koa-router这个middleware，让它负责处理URL映射
 * */
router.get('/hello/:name', async (ctx, next) => {
  //通过ctx.params中取到了路由中的参数
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

// router.get('/', async (ctx, next) => {
//   ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });

// router.get('/', async (ctx, next) => {
//   ctx.response.body = `<h1>陈浩的个人网站</h1>`;
// });

/**
 * 上面用router.get('/path', async fn)处理的是get请求,
 *
 * 如果要处理post请求，可以用router.post('/path', async fn)。
 * 用post请求处理URL时，我们会遇到一个问题：post请求通常会发送一个表单，或者JSON，它作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能！
 *
 * 所以，我们又需要引入另一个middleware来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中。
 * koa-bodyparser就是用来干这个活的。
 * */
router.post('/signin', async (ctx, next) => {
  /**
   * 用 ctx.request.body.name || ''拿到表单的name字段，如果该字段不存在，默认值设置为''。
   * 类似的，put、delete、head请求也可以由router处理。
   * */
  var name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
});


// add router middleware:
app.use(router.routes());

// 在端口8686监听:
app.listen(8686);
console.log('app started at port 8686...');
