/**
 * Created by chenhaoact on 2017/7/1.
 */
import React from 'react';
import './index.scss';

class ThinkArticle extends React.Component {

  render() {
    /**
     * require动态引入模块路径 require()里直接放url变量会报错: Cannot find module "."
     * 现加带.的路径前缀的字符串再+文件路径变量即可
     *
     * 这里的MdUrl从组件调用的路由读取，这样可以通过访问路由动态设置读取的md文件路径，
     * 以使得用同一个组件可根据数据渲染不同的内容
     *
     * react router:
     * 从this.props.location可以拿到react router的一些路由的数据
     * this.props.params.id 可以拿到路由的id
     * */
    const MdUrl = 'data/' + this.props.params.id + '.md';
    const MdHtml = require('../../' + MdUrl);

    return (
      <div>
        文章
        {
          /**
           * MdHtml是通过webpack的markdown-loader处理，引入后直接变为相应html
           *
           * 这里用jsx的html转义(dangerouslySetInnerHTML)
           * 插入html（如果直接插入html会由于安全原因直接把代码显示而不是解析为dom）
           * 参考此文html转义部分：http://yijiebuyi.com/blog/2e3b6f3a01983e46c3aaca4f28377a28.html
           * */
        }
        {/*<div>{MdHtml}</div>*/}
        <div dangerouslySetInnerHTML={{__html: MdHtml}}></div>
      </div>
    );
  }
}

export default ThinkArticle;
