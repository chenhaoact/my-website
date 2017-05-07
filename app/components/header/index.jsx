/**
 * Created by chenhaoact on 2017/1/26.
 */
import React from 'react';
import {Menu, Icon} from 'antd';

import {Link} from 'react-router';

import './index.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'me'
    }
  }

  handleClick(e) {
    console.log('click ', e);
    /**
     * 要想使用this.setState(),需要在事件绑定时用 this.事件函数.bind(this)
     * */
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="me">
            {
              /**
               * Link是react-router提供的路由跳转链接组件
               * */
            }
            <Link to="/me">关于我</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            {/*技术博客先iframe内嵌个人域名:4000端口上部署的hexo博客系统*/}
            <Link to="/blog">技术博客</Link>
          </Menu.Item>
          <Menu.Item key="works">
            <Link to="/works">作品</Link>
          </Menu.Item>
          <Menu.Item key="life">
            <Link to="/life">生活</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Header;
