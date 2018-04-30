import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({ input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SignIn extends Component {

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger red-text">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <div className="row">
        <div className="col s12">
          <br/>
          {this.renderAlert()}
        </div>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="col s12">
        <br/>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <div>
          <br/>
          <button type="submit" className="btn btn-large light-green z-depth-0" disabled={submitting}>Sign in</button>
        </div>
      </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  validate
})(connect(mapStateToProps, actions)(SignIn));
