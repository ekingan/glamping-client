import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actopms from '../../actions';
import InputText from '../forms/input_text';

class Signup extends Component {
  render () {
    const { valid, invalid, handleSubmit, fields: { email, password, passwordConfirm}} = this.props;

    return (
      <form>
        <InputText label='Email' type='email' {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        <InputText label='Password' type='password' {...password} />
          {password.touched && passwordConfirm.touched && password.error && <div className="error">{password.error}</div>}
        <InputText label='Confirm Password' type='password' {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        <button className="btn btn-primary" action="submit" disabled={invalid}>Sign Up</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {}
  if (formProps.password != formProps.passwordConfirm) {
    errors.password = "Passwords do not match";
  }
  if (!formProps.email) { errors.email = "Please enter a valid email address" }
  if (!formProps.password) { errors.password = "Please enter a password" }
  if (!formProps.passwordConfirm) { errors.passwordConfirm = "Please enter a password confirmation" }
  return errors
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);
