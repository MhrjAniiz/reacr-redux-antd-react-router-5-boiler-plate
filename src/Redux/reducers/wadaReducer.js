import {
  DELETE_WADAPATRA_FAILURE,
  DELETE_WADAPATRA_REQUEST,
  DELETE_WADAPATRA_SUCCESS,
  GET_WADAPATRA_BY_ID_FAILURE,
  GET_WADAPATRA_BY_ID_REQUEST,
  GET_WADAPATRA_BY_ID_SUCCESS,
  GET_WADAPATRA_FAILURE,
  GET_WADAPATRA_REQUEST,
  GET_WADAPATRA_SUCCESS,
  POST_WADAPATRA_FAILURE,
  POST_WADAPATRA_REQUEST,
  POST_WADAPATRA_SUCCESS,
  UPDATE_WADAPATRA_FAILURE,
  UPDATE_WADAPATRA_REQUEST,
  UPDATE_WADAPATRA_SUCCESS,
} from "../Types/WadaPatraTypes";

const initialState = {
  loading: false,
  wada: [],
  error: "",
  updateWadapatra: {},
  updateArray: [],
  updateLoading: false,
};

const wadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WADAPATRA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WADAPATRA_SUCCESS:
      return {
        loading: false,
        wada: action.payload,
        error: "",
      };

    case GET_WADAPATRA_FAILURE:
      return {
        loading: false,
        wada: [],
        error: action.payload,
      };
    //post
    case POST_WADAPATRA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_WADAPATRA_SUCCESS:
      return {
        ...state,
        loading: false,
        wada: [...state.wada, action.payload],
      };
    case POST_WADAPATRA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        wada: [],
      };

    //delete
    case DELETE_WADAPATRA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_WADAPATRA_SUCCESS:
      const filterItems = state.wadapatra.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        wadapatra: filterItems,
      };
    case DELETE_WADAPATRA_FAILURE:
      return {
        ...state,
        loading: false,
        wadapatra: [],
      };

    //get WADAPATRA by id
    case GET_WADAPATRA_BY_ID_REQUEST:
      return {
        ...state,
        updateLoading: true,
      };
    case GET_WADAPATRA_BY_ID_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        updateWadapatra: action.payload,
      };
    case GET_WADAPATRA_BY_ID_FAILURE:
      return {
        ...state,
        updateLoading: false,
        error: action.payload,
        updateWadapatra: {},
      };

    //update WADAPATRA case
    case UPDATE_WADAPATRA_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_WADAPATRA_SUCCESS:
      const filteredItemIndex = state.wada.findIndex(
        (wadapatra) => wadapatra.id === action.payload.id
      );
      const newArray = [...state.wada];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        wada: newArray,
      };

    case UPDATE_WADAPATRA_FAILURE:
      return {
        ...state,
        loading: false,
        wada: [],
      };
    default:
      return state;
  }
};

export default wadaReducer;
