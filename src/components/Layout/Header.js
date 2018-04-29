import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <nav className="app-nav">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">view_quilt</i>redux·store</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#"><i className="material-icons">search</i></a></li>
              <li><a href="#"><i className="material-icons">view_module</i></a></li>
              <li><a href="#"><i className="material-icons">refresh</i></a></li>
              <li><a href="#"><i className="material-icons">more_vert</i></a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;