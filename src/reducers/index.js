import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import ticket from "./ticket";
const rootReducer = combineReducers({
  ticket,
  form
});

export default rootReducer;
