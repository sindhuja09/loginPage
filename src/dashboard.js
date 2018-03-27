import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Dashboard extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/dashboard/">Home</NavLink></li>
            <li><NavLink to="/dashboard/stuff">Stuff</NavLink></li>
            <li><NavLink to="/dashboard/contact">Contact</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
          
          </ul>
          <div className="content">
          <Route exact path="/dashboard/" component={Home}/>
          <Route path="/dashboard/stuff" component={Stuff}/>
          <Route path="/dashboard/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Dashboard;