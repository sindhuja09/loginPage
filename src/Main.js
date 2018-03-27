import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import Home from "./Home";
// import Stuff from "./Stuff";
// import Contact from "./Contact";
// import Login from "./Login";

import Dashboard from "./dashboard";
// import FormErrors from "./formerror";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
          {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
            <li><NavLink to="/">Signin</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
          </ul>
          
          {/* <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/> */}
        
          </div>
      
      </HashRouter>
    );
  }
}
 
export default Main;