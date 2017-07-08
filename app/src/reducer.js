/**
 * Created by chenhaoact on 2017/1/31.
 */
import { combineReducers } from 'redux';
import blog from './containers/blog/reducer';
import life from './containers/life/reducer';
import me from './containers/me/reducer';
import works from './containers/works/reducer';
import think from './containers/think/reducer';

const appMainReducer = combineReducers({
  blog,
  life,
  me,
  works,
  think
});

export default appMainReducer;
