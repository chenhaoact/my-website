import React from 'react';

import CardArea from './containers/cardArea';
import './index.scss';

class Works extends React.Component {
  constructor() {
    super();
  }


  render() {

    //TODO 数据与组件渲染逻辑待完善,还有路由
    return (
      <div className="m-t-l">
        <CardArea />
      </div>
    );
  }
}

export default Works;
