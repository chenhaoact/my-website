/**
 * Home组件，react-router中放的根组件
 * 在Home中进行通用的布局
 * 放页面的公共部分，如: header,footer等，并且把header,footer剩下的位置撑开放内容
 * */

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './home.scss';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home">
        {
          /**
           * 页面的布局：
           * Header组件fixed在最上面，并且z-index设置为1001，一遍内容向上滚动时不会遮住Header
           *
           * home-content-area里放页面内容，padding-top为Header的高,
           * 预留出顶栏的位置（因为顶栏fixed之后脱离了文档流，原来的占位没有了）。
           * 内容区height设为auto,自适用内容高度,并设置min-height: 600px;当内容很少时也能保证撑开
           * 底部不需要padding-bottom预留位置，因为Footer组件是直接放在元素下面的，没有使用position的一些属性脱离文档流
           *
           * Footer组件一直放在最下面
           * */
        }
        <Header/>
        {
          /**
           * react-router使用 `this.props.children` 替换 其路由中嵌套的子路由组件
           * 路由定义见最外层的index.jsx
           * 其他部分可以放公共组件
           * */
        }
        <div className="home-content-area">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
