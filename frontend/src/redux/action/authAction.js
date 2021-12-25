import { Toast } from '../../components/sweetalert/swal';
import axios from '../../helper/axios';
import { ActionTypes } from '../constant/action-type';

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGIN_REQUEST, payload: user });
    const res = await axios.post(`/admin/auth/login`, { ...user });
    if (res.status === 200) {
      const { token, user } = res.data ? res.data : {};
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { token, user } });
      const msg = res?.data?.message ? res?.data?.message : 'success';
      Toast.fire({
        icon: 'success',
        title: msg
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.LOGIN_FAILER,
      payload: { error }
    });
    const msg = error?.response?.data?.message
      ? error?.response?.data?.message
      : 'Something went wrong!';
    Toast.fire({
      icon: 'error',
      title: msg
    });
  }
};

export const signup = (user) => async (dispatch) => {
  dispatch({ type: ActionTypes.SIGNUP_REQUEST });
  const res = await axios.post(`/admin/signup`, {
    ...user // Spread oprater
  });

  if (res.status === 200) {
    const { message } = res.data;
    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: { message } });
  } else {
    const { message } = res.data;
    if (res.status === 400) {
      dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
    }
    if (res.status === 422) {
      console.log(res, 'action');
      dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
    }
    dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
  }
};

export const isUserLogedIn = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { token, user } });
  } else {
    dispatch({
      type: ActionTypes.LOGIN_FAILER,
      payload: { error: 'Login failed' }
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST });
    window.localStorage.clear();
    const res = await axios.post(`/admin/auth/logout`);
    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: ActionTypes.LOGOUT_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: ActionTypes.LOGOUT_FAILED, payload: error.message });
  }
};
