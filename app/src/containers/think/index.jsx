import React from 'react';
import ReactMarkdown from 'react-markdown';

import './index.scss';

import ThinkList from './containers/thinkList';

class Think extends React.Component {
  constructor() {
    super();
  }

  //TODO 这里放思考与感悟（包括职场，产品，商业判断，读书笔记等的文章）
  render() {

    return (
      <div className="m-t-l">
        <div>
          记录自己的思考与感悟。
          <ThinkList />
        </div>
      </div>
    );
  }
}

export default Think;
