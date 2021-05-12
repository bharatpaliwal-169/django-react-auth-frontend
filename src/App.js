import React, { Component } from "react";
import Root from './Redux/Root';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/containers/Signup";
import Login from "./components/containers/Login";
import Dashboard from "./components/containers/Dashboard";
import HookLogin from "./components/Hooked/HookLogin";

import { ToastContainer } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

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
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;