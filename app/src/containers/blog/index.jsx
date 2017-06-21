import React from 'react';

import './index.scss';

class Blog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="chenhaoact-blog">
        {
          /**
           * 目前先嵌入iframe引入hexo博客,
           * 通过 border: 0; 消除了iframe的边框
           * */
        }
        <iframe src="http://www.chenhaoact.com:4000"
                className="blog-iframe border-0">
        </iframe>
      </div>
    );
  }
}

export default Blog;
