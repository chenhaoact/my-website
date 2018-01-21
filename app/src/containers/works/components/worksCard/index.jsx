import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './index.scss';

/**
 * 这里用一个无状态函数封装一个React组件，方便简单
 *
 * 卡片及内部的组件用的是material-ui的
 * http://www.material-ui.com/#/components/card
 *
 * 组件传入属性：
 * imgName 图片文件名  （不需要前缀，路径在组件中自动设置为此应用的assets对应目录，需要先保证该路径传了文件）
 * title 作品标题
 * intro 作品简介
 * date 作品日期
 * link 预览效果的url
 * */
const WorksCard = (props) => {
  const { imgName, title, intro, date, link } = props;

  return (
    <div className="works-card">
      <Card>
        <CardMedia
          overlay={<CardTitle title={title} subtitle={date}/>}
        >
          <img src={ require('../../../../assets/' + imgName) }
               className="works-card-img"/>
        </CardMedia>
        <CardText>
          {intro}
        </CardText>
        <CardActions>
          {/* material ui 的Button 组件里填 target="_blank" 是能生效新开窗口跳转链接的 */}
          <FlatButton
            label="预览效果"
            href={link}
            target="_blank"
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default WorksCard;
