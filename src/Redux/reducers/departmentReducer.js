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

const initialState = {
  loading: false,
  department: [],
  updateDepartment: {
    created_at: "",
    dept_name: "",
    deleted_at: "",
    dept_url: "",
    is_menu: "",
    process: "",
    required_document: "",
    room_no: "",
    updated_at: "",
  },
  updateDepartmentArray: [],
  error: "",
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DEPARTMENT_SUCCESS:
      return {
        loading: false,
        department: action.payload,
        error: "",
      };

    case GET_DEPARTMENT_FAILURE:
      return {
        loading: false,
        department: [],
        error: action.payload,
      };

    case POST_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        department: [...state.department, action.payload],
      };
    case POST_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        department: [],
      };

    case DELETE_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DEPARTMENT_SUCCESS:
      const filterItems = state.department.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        department: filterItems,
      };
    case DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        department: [],
      };
    case GET_DEPARTMENT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DEPARTMENT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateDepartment: { ...action.payload },
      };
    case GET_DEPARTMENT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateDepartment: {},
      };

    //update department case
    case UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_DEPARTMENT_SUCCESS:
      const filteredItemIndex = state.department.findIndex(
        (dept) => dept.id === action.payload.id
      );
      const newArray = [...state.department];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        department: newArray,
      };

    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        department: [],
      };
    default:
      return state;
  }
};

export default departmentReducer;
