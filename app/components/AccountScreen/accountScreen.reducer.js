import {Images} from '../../constants/Images';
import {
  EDIT_PROFILE_DETAILS,
  SAVE_POST,
} from './accountScreen.action.constants';

const initialState = {
  savedPosts: [],
  profileInfo: {
    name: 'Vishwa S',
    userName: 'vishwa_b_s',
    profileImage: Images.post3,
    aboutInfo: 'Indian',
    website: '',
    isBusinessAccount: false,
  },
};

export const updateAccountInfo = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST: {
      return {
        ...state,
        savedPosts: action.payload,
      };
    }
    case EDIT_PROFILE_DETAILS: {
      return {
        ...state,
        profileInfo: action.payload,
      };
    }
    default:
      return state;
  }
};
