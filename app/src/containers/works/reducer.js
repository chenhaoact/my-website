/**
 * Created by chenhaoact on 2017/1/31.
 */
import {combineReducers} from 'redux';
import cardArea from './containers/cardArea/reducer';

const works = combineReducers({ cardArea });

export default works;
