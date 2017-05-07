import React from 'react';
import ReactDOM from 'react-dom';

//使用react-router，参考：http://www.uprogrammer.cn/react-router-cn/docs/guides/basics/RouteConfiguration.html
import {Router, Route, Link, hashHistory} from 'react-router';
import {IndexRoute} from 'react-router';

// import 'antd/dist/antd.css'; 使用了babel-plugin-import 会按需加载样式，不需要这样全量引入样式了。 参考：https://ant.design/docs/react/use-with-create-react-app-cn 按需加载部分
//引入通用的scss样式
import './utils/scss/util.scss';
import './utils/scss/common.scss';
import './utils/scss/variable.scss';

import './index.scss';

//Material-UI React组件库需要用到,http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin';
//Material-UI 的主题提供组件
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material-UI: Our components use react-tap-event-plugin to listen for touch / tap / clickevents.
// This dependency is temporary and will go away once the official React version is released.
// Until then, be sure to inject this plugin at the start of your app.
// react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();

/**
 * 引入redux,创建store,总ruducer在appMainReducer(定义在app目录下的reducer文件)上，从它开始进行reducer的拆分
 */
import {createStore} from 'redux';
import appMainReducer from './reducer';
const store = createStore(appMainReducer);

/**
 * 使用react-redux
 * */
import { Provider } from 'react-redux';

import Home from './containers/home';
import Me from './containers/me/index';
import Blog from './containers/blog/index';
import Works from './containers/works/index';
import Life from './containers/life/index';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    /**
     * 当前时刻的 State，可以通过store.getState()拿到。
     * */
    // console.log('store.getState()',store.getState());
    return (
      <Provider store={store}>
        <div id="container">
          <MuiThemeProvider>
            <div>
              {
                /**
                 * 这里必须要加hashHistory，路由或默认加/#/,否则会报错： Cannot read property 'getCurrentLocation' of undefined
                 * */
              }
              <Router history={hashHistory}>
                <Route path="/" component={Home}>
                  {
                    /**
                     * react-router 嵌套在里面的组件，在Home中
                     * 使用 `this.props.children` 替换 其路由中嵌套的子路由组件
                     * 这里Home中this.props.children外就是公用的部分
                     * */
                  }
                  <Route path="me" component={Me}/>
                  <Route path="blog" component={Blog}/>
                  <Route path="works" component={Works}/>
                  <Route path="life" component={Life}/>
                </Route>
              </Router>
            </div>
          </MuiThemeProvider>
        </div>
      </Provider>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));


