"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    return (
      <section className="section home">
        <h1>Welcome to the home page</h1>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Home)