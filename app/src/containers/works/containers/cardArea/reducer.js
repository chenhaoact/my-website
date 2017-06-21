/**
 * Created by chenhaoact on 2017/1/31.
 */
import * as actions from './actions';

const initialState = {
  cardList: {}
};

const cardArea = (state = initialState, action = {}) => {
  switch (action.type) {
    /**
     * 上面的action是jsx中dispatch传过来的action类型,
     * 下面的actions是actions.js中预先定义的action类型
     * */
    case actions.GET_CARD_LIST: {
      console.log('cardArea reduce GET_CARD_LIST执行');

      return Object.assign({}, state, {
        cardList: {
          data: [
            '作品一',
            '作品二'
          ]
        }
      });
    }

    default:
      return state;
  }
};

export default cardArea;
