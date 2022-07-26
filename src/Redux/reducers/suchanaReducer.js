import {
  DELETE_SUCHANA_FAILURE,
  DELETE_SUCHANA_REQUEST,
  DELETE_SUCHANA_SUCCESS,
  GET_SUCHANA_BY_ID_FAILURE,
  GET_SUCHANA_BY_ID_REQUEST,
  GET_SUCHANA_BY_ID_SUCCESS,
  GET_SUCHANA_FAILURE,
  GET_SUCHANA_REQUEST,
  GET_SUCHANA_SUCCESS,
  POST_SUCHANA_FAILURE,
  POST_SUCHANA_REQUEST,
  POST_SUCHANA_SUCCESS,
  UPDATE_SUCHANA_FAILURE,
  UPDATE_SUCHANA_REQUEST,
  UPDATE_SUCHANA_SUCCESS,
} from "../Types/SuchanaTypes";

const initialState = {
  loading: false,
  suchana: [],
  error: "",
  updateSuchana: {},
};

const suchanaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCHANA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCHANA_SUCCESS:
      return {
        loading: false,
        suchana: action.payload,
        error: "",
      };

    case GET_SUCHANA_FAILURE:
      return {
        loading: false,
        suchana: [],
        error: action.payload,
      };
    //post
    case POST_SUCHANA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCHANA_SUCCESS:
      return {
        ...state,
        loading: false,
        suchana: [...state.suchana, action.payload],
      };
    case POST_SUCHANA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        suchana: [],
      };

    //delete
    case DELETE_SUCHANA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCHANA_SUCCESS:
      const filterItems = state.suchana.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        suchana: filterItems,
      };
    case DELETE_SUCHANA_FAILURE:
      return {
        ...state,
        loading: false,
        suchana: [],
      };

    //get SUCHANA by id
    case GET_SUCHANA_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCHANA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateSuchana: action.payload,
      };
    case GET_SUCHANA_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateSuchana: {},
      };

    //update SUCHANA case
    case UPDATE_SUCHANA_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_SUCHANA_SUCCESS:
      const filteredItemIndex = state.suchana.findIndex(
        (suchana) => suchana.id === action.payload.id
      );
      const newArray = [...state.suchana];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        suchana: newArray,
      };

    case UPDATE_SUCHANA_FAILURE:
      return {
        ...state,
        loading: false,
        suchana: [],
      };
    default:
      return state;
  }
};

export default suchanaReducer;
