import {
  CHANGE_BACKGROUND_COLOR,
  CHANGE_TINT_COLOR,
} from '../actionTypeConstant/appAction.constant';

export const changeBgColor = color => {
  return {
    type: CHANGE_BACKGROUND_COLOR,
    payload: color,
  };
};

export const changeTintColor = color => {
  return {
    type: CHANGE_TINT_COLOR,
    payload: color,
  };
};
