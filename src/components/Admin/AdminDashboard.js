import React from 'react';
import requireAuth from '../Containers/RequireAuthentication';
import {connect} from "react-redux";
import * as actions from "../../actions/authenticate";

const AdminDashboard = () => {
  return (
    <div>
      <h1>This is a private dashboard!</h1>

      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="http://lorempixel.com/400/200/" />
              <a className="btn-floating halfway-fab waves-effect waves-light orange"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToPros = (state) => {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToPros, actions)(AdminDashboard);