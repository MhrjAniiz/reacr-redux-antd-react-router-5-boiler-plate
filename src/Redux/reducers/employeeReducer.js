import {
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_BY_ID_FAILURE,
  GET_EMPLOYEE_BY_ID_REQUEST,
  GET_EMPLOYEE_BY_ID_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  POST_EMPLOYEE_FAILURE,
  POST_EMPLOYEE_REQUEST,
  POST_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
} from "../Types/EmployeeTypes";

const initialState = {
  loading: false,
  employee: [],
  error: "",
  updateEmployee:{}
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        employee: action.payload,
        error: "",
      };

    case GET_EMPLOYEE_FAILURE:
      return {
        loading: false,
        employee: [],
        error: action.payload,
      };
  //post
  case POST_EMPLOYEE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case POST_EMPLOYEE_SUCCESS:
    return {
      ...state,
      loading: false,
     employee: [...state.employee, action.payload],
    };
  case POST_EMPLOYEE_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
      employee: [],
    };

  //delete
  case DELETE_EMPLOYEE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case DELETE_EMPLOYEE_SUCCESS:
    const filterItems = state.employee.filter(
      (items) => items.id !== action.payload
    );

    return {
      ...state,
      loading: false,
      employee: filterItems,
    };
  case DELETE_EMPLOYEE_FAILURE:
    return {
      ...state,
      loading: false,
      employee: [],
    };

  //get EMPLOYEE by id
  case GET_EMPLOYEE_BY_ID_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_EMPLOYEE_BY_ID_SUCCESS:
    return {
      ...state,
      loading: false,
      updateEmployee: action.payload,
    };
  case GET_EMPLOYEE_BY_ID_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
      updateEmployee: {},
    };

  //update EMPLOYEE case
  case UPDATE_EMPLOYEE_REQUEST:
    return {
      ...state,
      laoding: true,
    };
  case UPDATE_EMPLOYEE_SUCCESS:
    const filteredItemIndex = state.employee.findIndex(
      (employee) => employee.id === action.payload.id
    );
    const newArray = [...state.employee];
    newArray[filteredItemIndex] = action.payload;
    return {
      ...state,
      loading: false,
      employee: newArray,
    };

  case UPDATE_EMPLOYEE_FAILURE:
    return {
      ...state,
      loading: false,
      employee: [],
    };
  default:
    return state;
}
};

export default employeeReducer;
