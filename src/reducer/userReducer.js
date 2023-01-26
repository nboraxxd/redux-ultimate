import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '../action/types';

const INITIAL_STATE = {
  userList: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        isError: true,
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };

    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };

    default:
      return state;
  }
};

export default userReducer;
