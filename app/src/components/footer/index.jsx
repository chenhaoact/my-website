import React from 'react';
import './index.scss';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    /**
     * 低栏不固定，放在所有内容下面的最底部
     * */
    return (
      <div className="footer-component bottom-0">
        底栏
      </div>
    );
  }
}

export default Footer;
