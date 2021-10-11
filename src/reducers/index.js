import { combineReducers } from "redux";
import eventsReducer from "../reducers/events.reducer";
import userReducer from "../reducers/user.reducer";

export default combineReducers({
  eventsReducer,
  userReducer,
});
