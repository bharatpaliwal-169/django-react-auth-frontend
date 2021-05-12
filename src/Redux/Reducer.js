import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { signupReducer } from "./signup/reducer";
import {loginReducer } from "./login/reducer";
import {notesReducer } from "./notes/reducer";


const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer,
    notes: notesReducer
  });

export default createRootReducer;