import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  AUTH_REQUEST,
  BASE_AUTH_URL,
  API_KEY,
  RESET,
  SEND_EMAIL_VERIFICATION_SUCCESS,
  VERIFY_EMAIL
} from "./constants";
import axios from "axios";

function setLocalStorage(userUID) {
  localStorage.setItem("userUID", userUID);
}

/**
 * Invoked before validating user login
 * @returns {Object} Action
 */
function authRequest() {
  return { type: AUTH_REQUEST };
}

/**
 * Invoked after user is successfully logged in
 * @returns {Object} Action
 */
function authSuccess(userUID) {
  setLocalStorage(userUID);
  return {
    type: AUTH_SUCCESS,
    userUID
  };
}

/**
 * Invoked if login API returns error
 * @param  {Object} error Error
 * @returns {Object} Action
 */
function authFail({ message }) {
  return {
    type: AUTH_FAILURE,
    error: message
  };
}

function sendEmailVerificationSuccess(idToken) {
  return {
    type: SEND_EMAIL_VERIFICATION_SUCCESS,
    idToken
  };
}

function reset() {
  return {
    type: RESET
  };
}

function handleSignUp(authData) {
  return dispatch => {
    authData = {
      ...authData,
      returnSecureToken: true
    };
    dispatch(authRequest());
    let url = `${BASE_AUTH_URL}signupNewUser?key=${API_KEY}`;
    axios
      .post(url, authData)
      .then(({ data }) => {
        dispatch(sendEmailVerification(data.idToken));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
}
/**
 * Action creator for user login
 * @param  {Object} payload User login credentials
 * @returns {function}
 */
function handleLogin(authData) {
  return dispatch => {
    authData = {
      ...authData,
      returnSecureToken: true
    };
    dispatch(authRequest());
    let url = `${BASE_AUTH_URL}verifyPassword?key=${API_KEY}`;
    axios
      .post(url, authData)
      .then(({ data }) => {
        dispatch(checkEmailVerified(data.idToken));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
}

function sendEmailVerification(idToken) {
  return dispatch => {
    let url = `${BASE_AUTH_URL}getOobConfirmationCode?key=${API_KEY}`;
    const requestBodyPayload = { requestType: VERIFY_EMAIL, idToken };
    axios
      .post(url, requestBodyPayload)
      .then(res => {
        console.log(res);
        dispatch(sendEmailVerificationSuccess(idToken));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

function checkEmailVerified(idToken) {
  return dispatch => {
    let url = `${BASE_AUTH_URL}getAccountInfo?key=${API_KEY}`;
    const requestBodyPayload = { idToken };
    axios
      .post(url, requestBodyPayload)
      .then(({ data }) => {
        const emailVerified = data.users[0].emailVerified;
        const userUID = data.users[0].localId;

        if (emailVerified) {
          dispatch(authSuccess(userUID));
        } else {
          console.log("User not verified");
          dispatch(authFail("User not verified"));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export { handleLogin, reset, checkEmailVerified, handleSignUp };
