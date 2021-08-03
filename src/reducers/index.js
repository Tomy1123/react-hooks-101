import { combineReducers } from "redux";

import events from "./events";
import opreationLogs from "./operationLogs";

export default combineReducers({ 
  events, 
  opreationLogs 
})