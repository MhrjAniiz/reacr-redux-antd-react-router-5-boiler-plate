import {
  DELETE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_BY_ID_FAILURE,
  GET_DEPARTMENT_BY_ID_REQUEST,
  GET_DEPARTMENT_BY_ID_SUCCESS,
  GET_DEPARTMENT_FAILURE,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  POST_DEPARTMENT_FAILURE,
  POST_DEPARTMENT_REQUEST,
  POST_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
} from "../Types/DepartmentTypes";
import {
  DELETE_OFFICE_FAILURE,
  DELETE_OFFICE_REQUEST,
  DELETE_OFFICE_SUCCESS,
  GET_OFFICE_BY_ID_FAILURE,
  GET_OFFICE_BY_ID_REQUEST,
  GET_OFFICE_BY_ID_SUCCESS,
  GET_OFFICE_FAILURE,
  GET_OFFICE_REQUEST,
  GET_OFFICE_SUCCESS,
  POST_OFFICE_FAILURE,
  POST_OFFICE_REQUEST,
  POST_OFFICE_SUCCESS,
  UPDATE_OFFICE_FAILURE,
  UPDATE_OFFICE_REQUEST,
  UPDATE_OFFICE_SUCCESS,
} from "../Types/OfficeTypes";

const initialState = {
  loading: false,
  office: [],
  updateOffice: {},
  error: "",
};

const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_OFFICE_SUCCESS:
      return {
        loading: false,
        office: action.payload,
        error: "",
      };

    case GET_OFFICE_FAILURE:
      return {
        loading: false,
        office: [],
        error: action.payload,
      };

    case POST_OFFICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_OFFICE_SUCCESS:
      return {
        ...state,
        loading: false,
        office: [...state.office, action.payload],
      };
    case POST_OFFICE_FAILURE:
      return {
        ...state,
        loading: false,
        office: [],
      };

    case DELETE_OFFICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_OFFICE_SUCCESS:
      const filterItems = state.office.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        office: filterItems,
      };
    case DELETE_OFFICE_FAILURE:
      return {
        ...state,
        loading: false,
        office: [],
      };
    case GET_OFFICE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_OFFICE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateOffice: action.payload,
      };
    case GET_OFFICE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateOffice: {},
      };

    //update OFFICE case
    case UPDATE_OFFICE_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_OFFICE_SUCCESS:
      const filteredItemIndex = state.office.findIndex(
        (dept) => dept.id === action.payload.id
      );
      const newArray = [...state.office];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        office: newArray,
      };

    case UPDATE_OFFICE_FAILURE:
      return {
        ...state,
        loading: false,
        office: [],
      };
    default:
      return state;
  }
};

export default officeReducer;
