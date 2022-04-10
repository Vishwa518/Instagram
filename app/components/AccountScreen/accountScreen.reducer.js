import {SAVE_POST} from './accountScreen.action.constants';

const initialState = {
  savedPosts: [],
};

export const updateAccountInfo = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST: {
      return {
        ...state,
        savedPosts: action.payload,
      };
    }
    default:
      return state;
  }
};
