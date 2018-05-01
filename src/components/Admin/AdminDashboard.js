import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from '../../actions/auth';

class AdminDashboard extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <section className="app-dashboard">
        <div className="row">
          <h4>{this.props.message}</h4>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="http://lorempixel.com/400/200/"/>
                <a className="btn-floating halfway-fab waves-effect waves-light orange"><i
                  className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                  require little markup to use effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(AdminDashboard);