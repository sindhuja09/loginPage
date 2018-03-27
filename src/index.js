import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// import Main from "./Main";
import Dashboard from "./dashboard";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Signin from "./signin";
import SignUp from "./SignUp";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
ReactDOM.render(
  <React.Fragment>
  <HashRouter>
    <div>
  <Route path="/" component={Signin} exact/>
  <Route path="/SignUp" component={SignUp}/>
  <Route path="/dashboard" component={Dashboard} />
  </div>
  </HashRouter>
  </React.Fragment>,
  document.getElementById("root")
);