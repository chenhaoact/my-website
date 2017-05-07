/**
 * Created by chenhaoact on 2017/1/31.
 */
const initialState = {}

const blog = (state = initialState, action = {}) => {
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

export default blog;
