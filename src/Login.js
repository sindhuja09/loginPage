import React, { Component } from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Route } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    let email

    if (localStorage.getItem('email')) {
       console.log('this.email.value')
    } 
    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            {/* <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"   onClick={() => { history.push('/dashboard') }}
            >
              Login
            </Button> */}
            <Route render={({ history}) => (
              <Button block bsSize="large" disabled={!this.validateForm()}
                type='submit'
                onClick={() => { history.push('/dashboard') }}
              >
                Login
              </Button>
            )} />
          </form>
        </div>
      );
    }
  }