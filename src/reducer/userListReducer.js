import {
  FETCH_USER_LIST_ERROR,
  FETCH_USER_LIST_REQUEST,
  FETCH_USER_LIST_SUCCESS,
  CREATE_USER_ITEM_REQUEST,
  CREATE_USER_ITEM_SUCCESS,
  CREATE_USER_ITEM_ERROR,
} from '../action/types'

const INITIAL_STATE = {
  userList: [],
  isLoading: false,
  isError: false,
  isCreating: false,
}

const userListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_REQUEST:
      // console.log('FETCH_USER_LIST_REQUEST', action)
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_USER_LIST_SUCCESS:
      // console.log('FETCH_USER_LIST_SUCCESS', action)
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
      }

    case FETCH_USER_LIST_ERROR:
      // console.log('FETCH_USER_LIST_ERROR', action)
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    case CREATE_USER_ITEM_REQUEST:
      return {
        ...state,
        isCreating: true,
      }

    case CREATE_USER_ITEM_SUCCESS:
      return {
        ...state,
        isCreating: false,
      }

    case CREATE_USER_ITEM_ERROR:
      return {
        ...state,
        isCreating: false,
      }

    default:
      return state
  }
}

export default userListReducer
