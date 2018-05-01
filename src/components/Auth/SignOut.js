import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';

class SignOut extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <section><h1>Sorry to see you go...</h1></section>
  }
}

export default connect(null, authActions)(SignOut);