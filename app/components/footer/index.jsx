import React from 'react';
import './index.scss';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="absolute bottom-0 footer">
        底栏
      </div>
    );
  }
}

export default Footer;
