/**
 * Created by chenhaoact on 2017/07/01.
 */
const initialState = {}

const think = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    // case CHANGE_USERNAME:
    //   return Object.assign({}, state, {
    //     userName: payload
    //   });
    default:
      return state;
  }
};

export default think;
