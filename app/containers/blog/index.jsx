import React from 'react';

import './index.scss';

class Blog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="chenhaoact-blog">
        <iframe src="http://www.chenhaoact.com:4000"
                className="blog-iframe">
        </iframe>
      </div>
    );
  }
}

export default Blog;
