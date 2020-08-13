import { combinedReducers, combineReducers } from "redux";
import DashboardReducer from "./DashBoardReducer";

const rootReducer = combineReducers({
  DashboardReducer,
});

export default rootReducer;
