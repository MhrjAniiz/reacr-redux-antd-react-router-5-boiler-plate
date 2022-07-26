import { useHistory } from "react-router";
import {
  clearLocalSession,
  getLocalSession,
  getToken,
  isLogin,
  setLocalSession,
} from "../../Utils/localStorage";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../Types/AuthTypes";

const initialState = {
  loading: false,
  login: [],
  error: "",
  loggedIn: false,
  userlist: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      setLocalSession(action.payload);
      return {
        loading: false,
        login: action.payload.user,
        loggedIn: true,
        error: "",
      };

    case LOGIN_REQUEST_FAILURE:
      return {
        loading: false,
        login: [],
        error: action.payload,
        loggedIn: false,
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOG_OUT_SUCCESS:
      clearLocalSession();

      return {
        ...state,
        loading: false,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userlist: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
