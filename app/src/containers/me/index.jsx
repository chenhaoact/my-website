import React from 'react';
import {Carousel, Row, Col} from 'antd';

import './index.scss';

class Me extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="me-containers">
        {
          /**
           * 使用ant-d的走马灯组件Carousel实现上下轮播
           * 可参考：https://ant.design/components/carousel-cn/
           * 更多详细参数参考：https://github.com/akiran/react-slick
           * 该组件目前似乎不好支持各屏的内容封装成自己组件，会报Cannot read property 'getBoundingClientRect' of null
           * 故所有内容先都直接写在Carousel组件下
           *
           * 而且该组件需要把要呈现的内容放到一级空的div下才行，否则切换区域的高度计算不对
           * 故下列每个切换区域嵌套了两个div
           *
           * autoplay设置为可自动轮播切换（鼠标聚焦时会停止自动轮播）
           *
           * TODO:
           * 把该组件自己在 act-ui中重写一下，让能够监听键盘的上下键一级mac键盘的上下手势
           * 并能够控制轮播时间，把该组件改的更强大一点，目前功能太简单了
           * */}
        <Carousel vertical="true"
                  autoplay
                  autoplaySpeed={5000}
                  speed={1000}>
          <div>
            <div className="self-introduction">
              <Row>
                <Col span={6} offset={3}>
                  <h2>个人简介</h2>
                  {/*引用静态资源*/}
                  {/*<img src={ require('../../assets/sidai-touxiang.png') } alt=""/>*/}
                </Col>
              </Row>
              <Row className="m-t-md">
                <Col span={18} offset={3}>
                  <p className="font-size-16">
                    你好，我是陈浩，天津大学软件工程系毕业，2017年通过校招加入阿里巴巴，成为了一名前端工程师（花名：君易），目前工作生活在杭州。
                  </p>
                </Col>
              </Row>
              <Row className="m-t-md">
                <Col span={18} offset={3}>
                  <p className="font-size-16">
                    欢迎通过以下平台联系交流或关注我的动态：
                  </p>
                </Col>
              </Row>
              <Row className="m-t-md">
                <Col span={2} offset={3}>
                  <a href="http://weibo.com/u/5232669014"
                     target="_blank"
                     className="weibo-link">
                    {/*通过推荐的symbol引用方式引入iconfont，可以设置图标彩色等属性*/}
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-weibo"></use>
                    </svg>
                  </a>
                </Col>
                <Col span={2}>
                  <a href="https://github.com/chenhaoact"
                     target="_blank"
                     className="github-link">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-github"></use>
                    </svg>
                  </a>
                </Col>
                <Col span={2}>
                  <a href="https://www.facebook.com/hao.chen.666"
                     target="_blank"
                     className="facebook-link">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-facebook"></use>
                    </svg>
                  </a>
                </Col>
                <Col span={2}>
                  <a href="https://twitter.com/chenhaoact"
                     target="_blank"
                     className="twitter-link">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-147263962143twitter"></use>
                    </svg>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className="career">
              <Row>
                <Col span={6} offset={3}>
                  <h2>工作与事业</h2>
                </Col>
              </Row>
              <Row className="m-t-md">
                <Col span={18} offset={3}>
                  <p className="font-size-16">
                    就职于阿里巴巴，主要从事前端开发(>= html,css,javascript)，所用技术包括但不限于：React,Vue,Weex,RN,Webpack,Node.js等。
                  </p>
                </Col>
              </Row>
              <Row className="m-t-md">
                <Col span={18} offset={3}>
                  <p className="font-size-16">
                    对端技术（跨平台移动端，桌面端开发等）,图像图像多媒体（Canvas,Svg,WebGL,VR/AR等）相关技术很感兴趣，也在不断的学习和探索中。
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Me;
