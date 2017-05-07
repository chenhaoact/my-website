/**
 * Created by chenhaoact on 2017/2/2.
 */

/**
 * koa的入口文件,服务器从这里启动
 * koa的服务下载app.js中
 * */
// Node.js只支持ES6，并不支持ES7，无法识别新的async语法。
// 要让Node.js运行ES7代码，需要把ES7代码“转换”为ES6代码，这样，Node.js就可以运行转换后的代码。
// 这个转换工作可以用Babel实现
const register = require('babel-core/register');

register({
  presets: ['stage-3']
});

require('./app.js');
