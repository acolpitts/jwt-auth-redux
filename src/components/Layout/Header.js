import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authenticate';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <div onClick={() => this.props.authenticate(false)}><a href="#"><i className="material-icons">account_circle</i></a></div>
    }

    return <div onClick={() => this.props.authenticate(true)}><a href="#"><i className="material-icons">menu</i></a></div>
  }

  renderUserMenu() {
    if (this.props.authenticated) {
      return <li><Link to="/dashboard"><i className="material-icons">view_module</i></Link></li>
    }
  }

  render() {
    return (
      <header className="app-header">
        <nav className="app-nav">
          <div className="nav-wrapper">
            <Link to="/"><div className="brand-logo"><i className="material-icons">view_quilt</i>redux·store</div></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/books"><i className="material-icons">search</i></Link></li>
              {this.renderUserMenu()}
              <li>{this.authButton()}</li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToPros = (state) => {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToPros, actions)(Header);