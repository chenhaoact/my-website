/**
 * Created by chenhaoact on 2017/1/31.
 */
/**
 * View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。
 * 可以定义一个函数来生成 Action，这个函数就叫 Action Creator
 * 如下里面的：getCardList()
 * */
export const GET_CARD_LIST = 'GET_CARD_LIST';

export function getCardList(params) {
  console.log('cardArea action getCardList()执行');
  return {
    type: GET_CARD_LIST,
    params
  }
}
