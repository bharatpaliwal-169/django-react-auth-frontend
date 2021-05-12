import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { signupReducer } from "./signup/reducer";
import {loginReducer } from "./login/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer
  });

export default createRootReducer;