/**
 * Home组件，react-router中放的根组件
 * 放页面的公共部分，如: header,footer等
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
      <div>
        <Header/>
        {
          /**
           * react-router使用 `this.props.children` 替换 其路由中嵌套的子路由组件
           * 其他部分可以放公共组件
           * */
        }
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Home;
