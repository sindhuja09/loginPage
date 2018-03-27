import React, { Component } from 'react';
import {FormErrors} from './formerror';
// import ReactDOM from 'react-dom';
import Main from "./Main";

class Signin extends Component{
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: { email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false,
        }
      }
      createUser(event) {
        event.preventDefault();
        // console.log(this.refs.email.value);
        // localStorage.setItem('email', (this.refs.email).value)
        // console.log(this.refs.password.value);
        // localStorage.setItem('password', (this.refs.password).value)
        let email = localStorage.getItem('email');
        console.log(email);
        if (this.refs.email.value == email) {
            console.log('input matches');
            this.props.history.push("./dashboard")
        }else{
            console.log('input didnt match')
        }
        

      }
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        
    
        switch(fieldName) {
         
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid:  this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      
    render(){
        return(
         <React.Fragment>
             <Main/>
            <div className="container">
              <div className="row">
               <div className="col-md-6 col-md-offset-3">
               <h3>Login From</h3>
               <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
               </div>
               <form className ='loginForm' onSubmit={this.createUser.bind(this)}>
                
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                   <label htmlFor='email'>E-mail</label>
                   <input type='email' className='form-control'ref="email" name='email' value={this.state.email} placeholder='Email' onChange={this.handleUserInput} required/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                   <label htmlFor='password'>Password</label>
                   <input type="password" className='form-control'ref="password" name='password' value={this.state.password} placeholder='Password' onChange={this.handleUserInput} required/>
                </div>
               
                <div className='form-group'>
                   <input type="submit" value="Login" className="btn btn-primary"   disabled={!this.state.formValid}/>
                </div>   
               </form>
               </div>
             </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Signin;