import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  class RequireAuth extends Component {

    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.auth.authenticated) {
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(RequireAuth);
}
