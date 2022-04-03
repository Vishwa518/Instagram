import {combineReducers} from 'redux';
import {changeBgReducer} from '../reducer';

const rootReducer = combineReducers({
  color: changeBgReducer,
});
export default rootReducer;
