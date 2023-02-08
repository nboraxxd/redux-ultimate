import axios from 'axios'
import {
  CREATE_USER_ITEM_ERROR,
  CREATE_USER_ITEM_REQUEST,
  CREATE_USER_ITEM_SUCCESS,
  DELETE_USER_ITEM_ERROR,
  DELETE_USER_ITEM_REQUEST,
  DELETE_USER_ITEM_SUCCESS,
  FETCH_USER_LIST_ERROR,
  FETCH_USER_LIST_REQUEST,
  FETCH_USER_LIST_SUCCESS,
} from './types'

// fetch user list
export const fetchUserList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserListRequest())

    try {
      const response = await axios.get('http://localhost:8080/users/all')
      const responeseUserList = response && response.data
      dispatch(fetchUserListSuccess(responeseUserList))
    } catch (error) {
      console.log(error)
      dispatch(fetchUserListError())
    }
  }
}

export const fetchUserListRequest = () => {
  return {
    type: FETCH_USER_LIST_REQUEST,
  }
}

export const fetchUserListSuccess = (payload) => {
  return {
    type: FETCH_USER_LIST_SUCCESS,
    payload,
  }
}

export const fetchUserListError = () => {
  return {
    type: FETCH_USER_LIST_ERROR,
  }
}

// create user item
export const createUserItem = (username, email, password) => {
  return async (dispatch, getState) => {
    dispatch(createUserItemRequest())

    try {
      const response = await axios.post('http://localhost:8080/users/create', {
        username,
        email,
        password,
      })

      if (response.data?.errCode === 0) {
        dispatch(createUserItemSuccess())
        dispatch(fetchUserList())
      }
    } catch (error) {
      console.log(error)
      dispatch(createUserItemError())
    }
  }
}

export const createUserItemRequest = () => {
  return {
    type: CREATE_USER_ITEM_REQUEST,
  }
}

export const createUserItemSuccess = () => {
  return {
    type: CREATE_USER_ITEM_SUCCESS,
  }
}

export const createUserItemError = () => {
  return {
    type: CREATE_USER_ITEM_ERROR,
  }
}

// delete user item
export const deleteUserItem = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserItemRequest())

    try {
      const response = await axios.post(`http://localhost:8080/users/delete/${id}`)

      if (response.data?.errCode === 0) {
        dispatch(deleteUserItemSuccess())
        dispatch(fetchUserList())
      }
    } catch (error) {
      console.log(error)
      dispatch(deleteUserItemError())
    }
  }
}

export const deleteUserItemRequest = () => {
  return {
    type: DELETE_USER_ITEM_REQUEST,
  }
}

export const deleteUserItemSuccess = () => {
  return {
    type: DELETE_USER_ITEM_SUCCESS,
  }
}

export const deleteUserItemError = () => {
  return {
    type: DELETE_USER_ITEM_ERROR,
  }
}
