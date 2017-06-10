const path = require('path');
const webpack = require('webpack');
// 导入非 webpack 默认自带插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * 文件路径定义
 * */
//path.resolve(__dirname) 就是项目的根目录，以后直接用path.resolve(__dirname)以便和官方的配置文件写法保持统一，不再用ROOT_PATH，APP_PATH等，不直观
//所有的path. 使用的是nodejs的path模块 详细参考：https://nodejs.org/docs/latest/api/path.html 和 https://www.npmjs.com/package/path

module.exports = {
  //entry,入口，指定要打包成的文件，目前是有app.js和vendors.js，这里应用程序开始执行，webpack 开始打包
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    //提取第三方库，单独打包到venders.js,提升性能
    //需要用到的一些库，最好单独提出来到venders比较好，不要和自己的业务代码混在一起
    vendors: ['react', 'react-dom', 'react-router', 'react-redux', 'moment'],
    /**
     * 多页面支持:
     * 除了应用默认主页面外的其他页面的html以及其业务js加到app/pages下app/pages下新建的页面逻辑文件夹下
     * 每增加一个页面，参考下面增加一个页面入口项，并且需要再添加下面plugins部分的HtmlwebpackPlugin项
     * */
    page2: path.resolve(__dirname, 'app/pages/page2/page2.jsx')
  },
  // output,出口，输出，webpack 如何输出结果的相关选项
  output: {
    //构建文件打包输出到app/build下
    path: path.resolve(__dirname, 'app/build'),
    //输出文件的名称规则，去和入口对应，入口有app和vendors，那么按此规则输出的就是app.js和vendors.js
    //打包的文件使用name+chunkhash命名一遍更新迭代和保密;
    //entry目前处理的都是js文件，打包输出的js会放在js文件夹下,方便不同类型的打包文件分类放置。默认公共库vendors扔放在build下，因为下面用了new webpack.optimize.CommonsChunkPlugin
    filename: 'js/[name]-[chunkhash].js'
  },
  //模块配置,重要的loader在这里
  module: {
    //module.rules 模块规则（配置加载器、解析器等选项）
    //webpack1 原来的 loader 配置项在2中被更强大的 rules 系统取代，后者允许配置 loader 以及其他更多选项
    rules: [
      //eslint校验先去掉
      // {
      //   test: /\.(js|jsx)$/,
      //   enforce: "pre", //pre是的是预处理，原来的module.preLoaders在webpack2中去掉，改成这种写法。loader前执行处理，这样每次npm run start的时候就可以看到一些提示信息
      //   loader: "eslint-loader" //使用eslint预处理进行校验
      // },
      {
        test: /\.(js|jsx)$/, //js和jsx文件都这样用babel处理
        include: [ //include定义哪些文件需要处理test 和 include 具有相同的作用，都是必须匹配选项，exclude 是必不匹配选项（优先于 test 和 include）
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader", //// 应该应用的 loader，它相对上下文解析,为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        options: { //loader 的可选项,原来query中的配置写在这里
          //使用这两种presets处理js或者jsx文件
          presets: ["es2015","react"],
          // ant-d官网推荐以这种方式引入ant-d组件的样式可以使得样式也按需加载，减少打包文件的大小提高性能,需要先安装babel-plugin-import，
          // 参考：https://github.com/ant-design/babel-plugin-import
          plugins: [
            ['import', [{libraryName: "antd", style: 'css'}]],
          ],
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?minimize"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?minimize', 'sass-loader'] //css-loader加?minimize参数，开启css压缩，参考https://doc.webpack-china.org/loaders/css-loader/最小化
        })
      },
      {
        //使用html-loader，对html文件进行文件加载优化和压缩，详细参考：https://doc.webpack-china.org/loaders/html-loader/
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true //进行压缩
          }
        }]
      }
    ]
  },
  //resolve,解析模块请求的选项,（不适用于对加载器(loader)解析）
  resolve: {
    // 用于查找模块的目录
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // extensions,使用的扩展名
    extensions: [".js", ".json", ".jsx", ".css"],
    // 模块别名列表
    alias: {}
  },
  // devtool,通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试，详细参考：https://doc.webpack-china.org/configuration/devtool/
  // 牺牲了构建速度的 `source-map' 是最详细的，方便调试,调试时可以改成它
  // 这里用速度和调试报错叫均衡的
  devtool: 'cheap-source-map',
  // context，webpack 的主目录，entry 和 module.rules.loader 选项。相对于此目录解析
  context: __dirname, // string（绝对路径！）
  // target，包(bundle)应该运行的环境，更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
  target: "web", // 枚举
  // externals，不要遵循/打包这些模块，而是在运行时从环境中请求他们,
  // TODO:！！先不要这样写，写了react会找不到而报错，后面找下具体原因
  // externals: ["react"],
  // 精确控制要显示的 bundle 信息,verbose是信息全部输出，开始配置webpack2的时候建议选这个，有利于与错误信息的提示，环境搭建好后建议改成errors-only， 参考：https://doc.webpack-china.org/configuration/stats/
  stats: "verbose",
  //dev server设置
  //使用webpack-dev-server，详细参考：https://doc.webpack-china.org/configuration/dev-server/ 和 https://www.npmjs.com/package/webpack-dev-server
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:8080'
    },
    contentBase: path.join(__dirname, "app/build"), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
  },
  //原来的plugins
  // plugins: [
    // 把入口文件里面的数组打包,合并区块成verdors.js，
    // 这个插件的功能是将多个打包结果中公共的部分抽取出来，作为一个单独的文件。它符合目前的场景，因为 main.js 和 vendor.js 中存在一份公共的代码，那就是 vendor.js 中的内容
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendors.js' }),
  // ]
  //webpack2的plugins 参考：https://doc.webpack-china.org/configuration/plugins/
  plugins: [
    // 设置合适的环境变量能够，需要在生产环境中将NODE_ENV设置为production，
    // 帮助 Webpack 更好地去压缩处理依赖中的代码,减少包体大小,提升性能
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //使用插件，将css单独打包，不打入js,提升页面加载速度和性能，参考插件使用：https://github.com/webpack-contrib/extract-text-webpack-plugin
    new ExtractTextPlugin('style.css'),
    //使用uglifyJs压缩js代码，提升性能。
    new webpack.optimize.UglifyJsPlugin({
      minimize: true //此配置已经是最小了，默认已去掉了注释等，不需要其他的配置。另外webpack2之后 UglifyJsPlugin 不再压缩 loaders。在未来很长一段时间里，需要通过设置 minimize:true 来压缩 loaders。
    }),
    //ignoreplugin :用于忽略引入模块中并不需要的内容，减少打包文件大小，提升性能。譬如当我们引入moment.js时，我们并不需要引入该库中所有的区域设置，因此可以利用该插件忽略不必要的代码。
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //用插件HtmlwebpackPlugin,默认的页面在PAGE_PATH下的index.html，拿到app/index.html当做模板构建后插入vendors.js和app.js的script标签
    //参考：https://www.npmjs.com/package/html-webpack-plugin
    new HtmlwebpackPlugin({
      title: '陈浩的个人网站',
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
      chunks: ['vendors','app'],
      inject: 'body'
    }),
    /**
     * 多页面支持:
     * 多次调用HtmlwebpackPlugin的方法处理各自的页面打包并应用需要的js即可
     * app下默认的index.jsx和index.html为默认的应用主页面
     * 加其他页面添加到app/pages下的对应页面的目录下，如果要用到和主页面一样的react技术栈那就在chunks属性中加上vendors，否则只加其自己页面js名
     * 每增加一个页面，参考下面增加一个页面入口项
     *
     * 其他页面访问通过:域名/页面名.html即可访问该页面,如果不加.html文件名是默认放到主页面的路由中处理无法访问页面的
     * */
    new HtmlwebpackPlugin({
      title: 'page2',
      template: path.resolve(__dirname, 'app/pages/page2/page2.html'),
      filename: 'page2.html',
      chunks: ['vendors','page2'],
      inject: 'body'
    }),
    // webpack.optimize. 一些构建优化插件
    // https://doc.webpack-china.org/plugins/commons-chunk-plugin/
    // 把入口文件里面的数组打包,合并共同的代码区块成verdors.js，
    // 这个插件的功能是将多个打包结果中公共的部分抽取出来，作为一个单独的文件。它符合目前的场景，因为 main.js 和 vendor.js 中存在一份公共的代码，那就是 vendor.js 中的内容
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }), //这里的name要和入口entry里的名称还有HtmlwebpackPlugin里的chunks保持一致，所以这里是vendors而不是vendor,不一致会产生chunk的冲突
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    //使用compression-webpack-plugin插件,将资源文件压缩为.gz文件，并且根据客户端的需求按需加载，提升性能。参考：https://www.npmjs.com/package/compression-webpack-plugin
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    // webpack-dev-server 强化插件 TODO:看先这两个插件的作用再决定是否要加
    // new DashboardPlugin(), //参考：https://www.npmjs.com/package/webpack-dashboard
    // new webpack.HotModuleReplacementPlugin(),
    /**
     * 使用插件webpack-bundle-analyzer来可视化分析包的大小：https://github.com/th0r/webpack-bundle-analyze 以便提升性能。
     * TODO:加上webpack-bundle-analyze，每次文件有更新后就会跑错，热更新监控有问题，排查下
     *
     * 注：平时开发时可以注释掉，以免每次都弹出分析包大小的页面，需要分析包大小进行性能优化的时候再去掉下面注释.
     * */
    // new BundleAnalyzerPlugin()
  ]
}
