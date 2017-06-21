import React from 'react';
import { Carousel } from 'antd';

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
           *
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
        <Carousel vertical="true" autoplay>
          <div>
            <div className="self-introduction">
              <h2>个人简介;社交账号</h2>
            </div>
          </div>
          <div>
            <div className="career">
              <h2>工作与事业</h2>
            </div>
          </div>
          <div>
            <div className="life">
              <h2>用心生活</h2>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Me;
