import React, { Component } from "react";
import Root from './Redux/Root';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/containers/Signup";
import Login from "./components/containers/Login";
import Dashboard from "./components/containers/Dashboard";
import HookLogin from "./components/Hooked/HookLogin";

import { ToastContainer } from "react-toastify";
import requireAuth from "./components/utils/RequireAuth";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";
// axios.defaults.baseURL = "https://mighty-sierra-18496.herokuapp.com";


class App extends Component {
  render() {
    return (
      <div>
        <Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/hooklogin" component={HookLogin} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;