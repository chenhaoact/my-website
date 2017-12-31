import React from 'react';
import './index.scss';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    /**
     * 底栏不固定，放在所有内容下面的最底部
     *
     * 在底栏中嵌入了个人最爱的歌的网易云音乐播放器这样在每个页面都会播放音乐
     * */
    return (
      <div className="footer-component bottom-0">
        {
          /**
           * 此处使用网易云音乐插件的iframe形式嵌入音乐播放器，
           * 将自己喜欢音乐的播放列表自动播放，具体参考http://music.163.com/#/outchain/1/1678955/
           * 另一种引用方式是flash，一般尽量不要再用flash，已经快被淘汰了
           * */
        }
        {/* TODO: 这里的网易云音乐播放器，先隐藏掉，播放器放在最下边访客不好控制，而且播放的音乐不随机，之后自己写个播放器放在上面，随机播放音乐
        <iframe frameBorder="no"
                border="0"
                marginWidth="0"
                marginHeight="0"
                className="music-iframe"
                width="360"
                height="320"
                src="//music.163.com/outchain/player?type=0&id=782732245&auto=1&height=400">
        </iframe>
         */}
      </div>
    );
  }
}

export default Footer;
