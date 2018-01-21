import React from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'antd';

import WorksCard from '../../components/worksCard';
import './index.scss';

import * as actions from './actions';

class CardArea extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {dispatch} =this.props;
    //调用dispatch actions去通过reducer改变state
    dispatch(actions.getCardList());
  }

  render() {
    const {stateData} =this.props;
    console.log('cardArea stateData', stateData);
    //TODO 数据与组件渲染逻辑待完善
    return (
      <div className="m-t-l">
        <div>
          <Row>
            <Col span="6" offset={2}>
              <WorksCard
                imgName={'js-logo.jpg'}
                title={'Github优秀开源项目整理'}
                intro="每周会整理一些不错的Github开源项目，所有项目也会第一时间整理到一张思维导图"
                date="2018-01-01"
                link="http://chenhaoact.com/github-project-recommend.html"
              />
            </Col>
            <Col span="6" offset={1}>
              <WorksCard
                imgName={'html5.jpg'}
                title={'我的前端学习大汇总'}
                intro="我的前端学习大汇总。前端技术学习收获总结整理，学习资源，职业规划，面试题等"
                date="2017-07-11"
                link="https://github.com/chenhaoact/chenhaoact-fe-learn"
              />
            </Col>
            {/*<Col span="6" offset={1}>*/}
              {/*<WorksCard imgName={'css3.jpg'}/>*/}
            {/*</Col>*/}
          </Row>
        </div>
      </div>
    );
  }
}


/**
 * 使用react-redux的connect方法
 * 注入 dispatch 和 state 到其React组件中
 * http://www.redux.org.cn/docs/react-redux/quick-start.html
 * */
// mapStateToProps，哪些 Redux 全局的 state 是我们组件想要通过 props 就可以获取的？
const mapStateToProps = (state) => {
  return {
    stateData: state.works.cardArea
  }
}

// mapDispatchToProps，哪些 action 创建函数是我们想要通过 props 就可以获取的？,在connect()的第二个参数中不加它就会注入dispatch到props中
// function mapDispatchToProps(dispatch) {
//   return {
//     // onIncrement: () => dispatch(increment())
//   };
// }

//导出的仍然是CardArea，但经过了connect()的处理
export default connect(
  mapStateToProps
  //,mapDispatchToProps
)(CardArea);
