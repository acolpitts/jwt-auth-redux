import React, { Component } from 'react';

// STYLES
import '../styles/main.scss';

// COMPONENTS
import Header from './Layout/Header';
import Main from './Containers/Main';
import Sidebar from './Layout/SideBar';
import Footer from "./Layout/Footer";

export default class App extends Component {
  render() {
    return (
      <article className="app-view">
        <Header/>
        <Main/>
        <Footer/>
      </article>
    );
  }
}
