import {
  DELETE_MENU_FAILURE,
  DELETE_MENU_REQUEST,
  DELETE_MENU_SUCCESS,
  GET_MENU_BY_ID_FAILURE,
  GET_MENU_BY_ID_REQUEST,
  GET_MENU_BY_ID_SUCCESS,
  GET_MENU_FAILURE,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  POST_MENU_FAILURE,
  POST_MENU_REQUEST,
  POST_MENU_SUCCESS,
  UPDATE_MENU_FAILURE,
  UPDATE_MENU_REQUEST,
  UPDATE_MENU_SUCCESS,
} from "../Types/MenuTypes";

const initialState = {
  loading: false,
  menu: [],
  updateMenu: {},
  error: "",
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MENU_SUCCESS:
      return {
        loading: false,
        menu: action.payload,
        error: "",
      };

    case GET_MENU_FAILURE:
      return {
        loading: false,
        menu: [],
        error: action.payload,
      };
    case POST_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: [...state.menu, action.payload],
      };
    case POST_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        menu: [],
      };

    case DELETE_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MENU_SUCCESS:
      const filterItems = state.menu.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        menu: filterItems,
      };
    case DELETE_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        menu: [],
      };
    case GET_MENU_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MENU_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateMenu: action.payload,
      };
    case GET_MENU_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateMenu: {},
      };

    //update Menu case
    case UPDATE_MENU_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_MENU_SUCCESS:
      const filteredItemIndex = state.menu.findIndex(
        (menu) => menu.id === action.payload.id
      );
      const newArray = [...state.menu];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        menu: newArray,
      };

    case UPDATE_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        menu: [],
      };
    default:
      return state;
  }
};

export default menuReducer;
