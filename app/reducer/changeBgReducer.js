import {
  CHANGE_BACKGROUND_COLOR,
  CHANGE_TINT_COLOR,
} from '../actionTypeConstant/appAction.constant';

const initialState = {
  color: '#202124', // #202124, #fff
  tintColor: '#fff', // #fff, #000
};
const changeBgReducer = (state = initialState, action) => {
  console.log('action', action.payload);
  switch (action.type) {
    case CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case CHANGE_TINT_COLOR:
      return {
        ...state,
        tintColor: action.payload,
      };
    default:
      return state;
  }
};
export default changeBgReducer;
