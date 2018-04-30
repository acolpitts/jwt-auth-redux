import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth'

class Header extends Component {
  authButton() {
    if (this.props.auth.authenticated) {
      return <div onClick={() => this.props.signoutUser()}><a href="#"><i className="material-icons">account_circle</i></a></div>
    }
    return <Link to="/signin"><i className="material-icons">menu</i></Link>
  }

  renderUserMenu() {
    if (this.props.auth.authenticated) {
      return (
        <ul className="app-menu right">
          <li><Link to="/dashboard"><i className="material-icons">view_module</i></Link></li>
          <li>{this.authButton()}</li>
        </ul>
      )
    } else {
      return (
          <ul className="app-menu right">
            <li>{this.authButton()}</li>
          </ul>
      )
    }
  }

  render() {
    return (
      <header className="app-header">
        <nav className="app-nav">
          <div className="nav-wrapper">
            <Link to="/"><div className="brand-logo"><i className="material-icons">view_quilt</i>redux·store</div></Link>

              {this.renderUserMenu()}


          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToPros = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToPros, actions)(Header);