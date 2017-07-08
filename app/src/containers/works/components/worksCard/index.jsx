import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './index.scss';

/**
 * 这里用一个无状态函数封装一个React组件，方便简单
 *
 * 卡片及内部的组件用的是material-ui的
 * http://www.material-ui.com/#/components/card
 * */
const WorksCard = (props) => {

  return (
    <div className="works-card">
      <Card>
        <CardMedia
          overlay={<CardTitle title="作品生产中，敬请期待" subtitle="0000-00-00"/>}
        >
          <img src={ require('../../../../assets/' + props.imgName) }
               className="works-card-img"/>
        </CardMedia>
        <CardText>
          作品简介放这里
        </CardText>
        <CardActions>
          <FlatButton label="预览效果"/>
        </CardActions>
      </Card>
    </div>
  );
}

export default WorksCard;
