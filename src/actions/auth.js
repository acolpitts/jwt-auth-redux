import axios from 'axios';
import history from '../history';
import config from '../../config';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

export const signinUser = ({ email, password }) => {
  return dispatch => {
    // Submit email/password to the server
    axios.post(`${config.AUTH_API}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - Use push, replace, and go to navigate around.
        history.push("/dashboard");
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export const signupUser = ({ email, password }) => {
  return dispatch => {
    axios.post(`${config.AUTH_API}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push("/dashboard");
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const fetchMessage = () => {
  return dispatch => {
    axios.get(`${config.AUTH_API}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
