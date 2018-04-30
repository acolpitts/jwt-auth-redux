import axios from 'axios';
import history from '../history';
import config from '../../config';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Set auth api based on env
    let AUTH_API;
    const env = process.env.NODE_ENV || 'development';
    env === "production" ? AUTH_API = config.AUTH_API_PROD : AUTH_API = config.AUTH_API_DEV

    // Submit email/password to the server
    axios.post(`${AUTH_API}/signin`, { email, password })
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

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
