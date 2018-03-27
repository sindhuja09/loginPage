import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Main from "./Main";
import Dashboard from "./dashboard";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);