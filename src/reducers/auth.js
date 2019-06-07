import { UPDATE_USER_DATA } from '../actions/constants';

const INITIAL_STATE = {
  isLogin: false,
  uuid: null,
  authData: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        isLogin: action.data.isLogin,
        authData: action.data.user,
        uuid: action.data.duid
      };
    default:
      return state;
  }
}
