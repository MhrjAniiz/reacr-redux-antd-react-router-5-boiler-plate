import { combineReducers } from "redux";
import authReducer from "./authReducer";
import departmentReducer from "./departmentReducer";
import employeeReducer from "./employeeReducer";
import galleryReducer from "./galleryReducer";
import mediaReducer from "./mediaReducer";
import menuReducer from "./menuReducer";
import officeReducer from "./officeReducer";
import suchanaReducer from "./suchanaReducer";
import wadaReducer from "./wadaReducer";

const rootReducer = combineReducers({
  department: departmentReducer,
  employee: employeeReducer,
  gallery: galleryReducer,
  media: mediaReducer,
  menu: menuReducer,
  wadapatra: wadaReducer,
  suchana: suchanaReducer,
  auth: authReducer,
  office: officeReducer,
});

export default rootReducer;
