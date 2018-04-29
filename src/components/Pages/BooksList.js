"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {
  render(){
    const booksList = this.props.books.map((book) => {
      return (
        <div key={book.id} className="books-list__item col s12 l6 xl4">
          <div className="books-list__item-content">
          <h4>{book.title}</h4>
          <p>{book.description}</p>
          <p>{book.price}</p>
          </div>
        </div>
      )
    });
    return (
      <section className="section books-list">
        <h1>Welcome to BooksList</h1>
        <div className="row">
          {booksList}
        </div>
      </section>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps)(BooksList)