import axios from 'axios';
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_SUCCESS,
} from './types';

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());

    try {
      const response = await axios.get('http://localhost:8080/users/all');
      const dataRespone = response?.data;

      dispatch(fetchUsersSuccess(dataRespone));
    } catch (error) {
      console.log('error', error);
      dispatch(fetchUsersError());
    }
  };
};

export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

export const createNewUserRedux = (username, email, password) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());

    try {
      const response = await axios.post('http://localhost:8080/users/create', {
        username,
        email,
        password,
      });

      if (response && response.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUsers());
      }
    } catch (error) {
      console.log(error);
      dispatch(createUsersError());
    }
  };
};

export const deleteUsersSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.post(`http://localhost:8080/users/delete/${id}`);

      if (response && response.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUsers());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
