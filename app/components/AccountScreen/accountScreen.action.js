import {SAVE_POST} from './accountScreen.action.constants';

export const savePostToStore = postsList => {
  return {
    type: SAVE_POST,
    payload: postsList,
  };
};
