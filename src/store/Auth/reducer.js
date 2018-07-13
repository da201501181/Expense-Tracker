import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  RESET,
  SEND_EMAIL_VERIFICATION_SUCCESS,
  REQUEST_ADD_EXPENSE,
  SUCCESS_ADD_EXPENSE
} from "./constants";

// Initial state
const initialState = {
  isLoading: false,
  error: null,
  authSuccess: false,
  sendEmailVerification: false,
  firebaseIdToken: null,
  userUID: null
};

// Reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        authSuccess: true,
        isLoading: false,
        userUID: action.userUID
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case RESET:
      return initialState;
    case SEND_EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        sendEmailVerification: true,
        isLoading: false,
        firebaseIdToken: action.idToken
      };
    default:
      return state;
  }
};

export default loginReducer;
