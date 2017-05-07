const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * 文件路径定义
 * */
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'app/build');
const PAGE_PATH = path.resolve(ROOT_PATH, 'app/pages');

module.exports = {
  //entry,入口，指定要打包成的文件，目前是有app.js和vendors.js
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx'),
    //提取第三方库，单独打包到venders.js,提升性能
    vendors: ['react', 'react-dom', 'react-router', 'react-redux', 'moment'] //需要用到的一些库，最好单独提出来到venders比较好，不要和自己的业务代码混在一起
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置。
  //完美的 SourceMaps 是很慢的，webpack 官方提供了七种 sourceMap 模式共大家选择
  //具体参考：https://segmentfault.com/a/1190000005770042 SourceMaps一节，但暂时用cheap-source-map编译时看不到打包大小有好多黄色的提示
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    //只要配置dev server map这个参数就可以了
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  //babel重要的loader在这里
  module: {
    //loader前执行处理，这样每次npm run start的时候就可以看到一些提示信息
    preLoaders: [],
    loaders: [
      {
        test: /\.(js|jsx)$/, //js和jsx文件都这样用babel处理
        loader: 'babel',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react'],
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
      //eslint校验，TODO:暂时先去掉，把webstorm的eslint提示和自动format弄好再开
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      //原来 css-loader的配置，现在加用下面的插件extract-text-webpack-plugin
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css', 'sass']
      // }
      //使用插件，将css单独打包，不打入js,提升页面加载速度和性能，参考插件使用：https://github.com/webpack-contrib/extract-text-webpack-plugin
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    //设置合适的环境变量能够，需要在生产环境中将NODE_ENV设置为production，
    // 帮助 Webpack 更好地去压缩处理依赖中的代码,减少包体大小,提升性能
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //抽取出输出包体中的相同或者近似的文件或者代码，可能对于 Entry Chunk 有所负担，不过能有效地减少包体大小，提升性能。
    new webpack.optimize.DedupePlugin(),
    //使用插件，将css单独打包，不打入js,提升页面加载速度和性能，参考插件使用：https://github.com/webpack-contrib/extract-text-webpack-plugin
    new ExtractTextPlugin('style.css'),
    //使用uglifyJs压缩js代码，提升性能。
    new webpack.optimize.UglifyJsPlugin({
      minimize: true //此配置已经是最小了，默认已去掉了注释等，不需要其他的配置
    }),
    //ignoreplugin :用于忽略引入模块中并不需要的内容，减少打包文件大小，提升性能。譬如当我们引入moment.js时，我们并不需要引入该库中所有的区域设置，因此可以利用该插件忽略不必要的代码。
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    //默认的页面在PAGE_PATH下的index.html
    new HtmlwebpackPlugin({
      title: 'My first react app',
      template: path.resolve(PAGE_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendors'],
      inject: 'body'
    }),
    // 把入口文件里面的数组打包,合并区块成verdors.js，
    // 这个插件的功能是将多个打包结果中公共的部分抽取出来，作为一个单独的文件。它符合目前的场景，因为 main.js 和 vendor.js 中存在一份公共的代码，那就是 vendor.js 中的内容
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    //使用compression-webpack-plugin插件,将资源文件压缩为.gz文件，并且根据客户端的需求按需加载，提升性能。
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    //使用插件webpack-bundle-analyzer来可视化分析包的大小：https://github.com/th0r/webpack-bundle-analyze 以便提升性能。
    new BundleAnalyzerPlugin()
  ]
}
