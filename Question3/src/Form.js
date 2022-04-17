import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      jobTitle: '',
      yearsExperience: '',
      formErrors: {firstName: '', lastName: '', email: ''},
      formValid: false
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

    switch(fieldName) {
      case 'firstName':
      case 'lastName':
      case 'email':
        fieldValidationErrors[fieldName] = (value === '') ? ' is required' : '';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors}, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: (this.state.firstName.length > 0) && (this.state.lastName.length > 0)
      && (this.state.email.length > 0)});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm" action="https://api.dummyendpoint/me/profile" method="post">
        <h2>Update Profile</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
          <label htmlFor="first_name">* First Name</label>
          <input type="text" required className="form-control" name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
          <label htmlFor="last_name">* Last Name</label>
          <input type="text" required className="form-control" name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">* Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">Birth Date</label>
          <input type="date" className="form-control" name="birthDate"
            placeholder="Birth Date"
            value={this.state.birthDate}
            onChange={this.handleUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="job_title">Job Title</label>
          <input type="text" className="form-control" name="jobTitle"
            placeholder="Job Title"
            value={this.state.jobTitle}
            onChange={this.handleUserInput} />
        </div>
        <div className="form-group">
          <label htmlFor="years_experience">Years of Experience</label>
          <input type="number" className="form-control" name="yearsExperience"
            placeholder="Years of Experience"
            value={this.state.yearsExperience}
            onChange={this.handleUserInput} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
