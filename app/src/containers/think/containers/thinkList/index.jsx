/**
 * Created by chenhaoact on 2017/7/1.
 */
import React from 'react';
import './index.scss';

class ThinkList extends React.Component {
  render() {
    return (
      <div className="articleList">
        <ul>
          <li>
            {
              /**
               * 这里thinkArticle/后边直接放博客的think/data下的markdown文件名，
               * 路由对应的ThinkArticle会根据路由去解析响应的md文件并渲染到html
               * */
            }
            <a href="#/thinkArticle/2017-07-09-我的四年大学生活总结">
              我的四年大学生活总结
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ThinkList;
