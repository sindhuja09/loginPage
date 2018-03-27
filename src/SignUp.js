import React, { Component } from 'react';
import {FormErrors} from './formerror';
// import ReactDOM from 'react-dom';
import Main from "./Main";

class SignUP extends Component{
    constructor (props) {
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          email: '',
          password: '',
          ConfirmPassword:'',
          formErrors: {firstname:'', email: '', password: '', ConfirmPassword:''},
          firstnameValid:false,
          emailValid: false,
          passwordValid: false,
          cnfpwdValid:false,
          formValid: false,
        }
      }
      createUser(event) {
        event.preventDefault();
        console.log(this.refs.firstName.value);
       localStorage.setItem('firstName', (this.refs.firstName).value)
        console.log(this.refs.lastName.value);
        localStorage.setItem('lastName', (this.refs.lastName).value)
        console.log(this.refs.email.value);
        localStorage.setItem('email', (this.refs.email).value)
        console.log(this.refs.password.value);
        localStorage.setItem('password', (this.refs.password).value)
        console.log(this.refs.cfrmpwd.value);
        localStorage.setItem('cfrmpwd', (this.refs.cfrmpwd).value)
      }
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstnameValid = this.state.firstnameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let cnfpwdValid = this.state.cnfpwdValid;
    
        switch(fieldName) {
          case 'firstname':
           firstnameValid= value.match(/^([a-z][A-Z]+)$/i);
           fieldValidationErrors.firstname = firstnameValid ? '' : ' is invalid';
           break;
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'ConfirmPassword':
            cnfpwdValid = value.length >= 6;
            fieldValidationErrors.ConfirmPassword = cnfpwdValid ? '': ' is not match';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        firstnameValid: firstnameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        cnfpwdValid: cnfpwdValid
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.firstnameValid && this.state.emailValid && this.state.passwordValid && this.state.cnfpwdValid});
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
               <h3>Registration From</h3>
               <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
               </div>
               <form className ='registrationForm' onSubmit={this.createUser.bind(this)}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.firstname)}`}>
                   <label htmlFor='firstname'>First Name</label>
                   <input type='text' className='form-control' ref="firstName" name='firstname' value={this.state.firstname} placeholder='First Name' onChange={this.handleUserInput} required/>
                </div>
                <div className='form-group'>                  
                   <label htmlFor='lastname'>Last Name</label>
                   <input type='text' className='form-control'ref="lastName" name='lastname' value={this.state.lastname} placeholder='Last Name' onChange={this.handleUserInput} required/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                   <label htmlFor='email'>E-mail</label>
                   <input type='email' className='form-control'ref="email" name='email' value={this.state.email} placeholder='Email' onChange={this.handleUserInput} required/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                   <label htmlFor='password'>Password</label>
                   <input type="password" className='form-control'ref="password" name='password' value={this.state.password} placeholder='Password' onChange={this.handleUserInput} required/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.ConfirmPassword)}`}>
                   <label htmlFor='cnfpwd'>Confirm Password</label>
                   <input type="password" className='form-control'ref="cfrmpwd" name='ConfirmPassword' value={this.state.cnfpwd} placeholder='Confirm Password' onChange={this.handleUserInput} required/>
                </div>
                <div className='form-group'>
                   <input type="submit" value="Register" className="btn btn-primary"   disabled={!this.state.formValid}/>
                </div>   
               </form>
               </div>
             </div>
            </div>
          </React.Fragment>
        )
    }
}

export default SignUP;