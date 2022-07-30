import {
  EDIT_PROFILE_DETAILS,
  SAVE_POST,
} from './accountScreen.action.constants';

export const savePostToStore = postsList => {
  return {
    type: SAVE_POST,
    payload: postsList,
  };
};

export const editProfileDetails = data => {
  return {
    type: EDIT_PROFILE_DETAILS,
    payload: data,
  };
};
