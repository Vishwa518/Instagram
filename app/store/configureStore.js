import {combineReducers} from 'redux';
import {updateAccountInfo} from '../components/AccountScreen/accountScreen.reducer';
import {changeBgReducer} from '../reducer';

const rootReducer = combineReducers({
  color: changeBgReducer,
  userAccountInfo: updateAccountInfo,
});
export default rootReducer;
