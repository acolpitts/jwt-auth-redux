import React from 'react';
import { renderComponent, expect, spy } from '../../test_helper';
import BooksList from '../../../src/components/Pages/BooksList';

describe('BooksList Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(BooksList, null, {
      books: {
        books:[
          {id:1, title:'Lorem ipsum'},
          {id:2, title:'Dolor sit amet'}
        ]}
    });
  })

  it('should list all books provided', () => {
    expect(component).to.contain('Lorem ipsum');
    expect(component).to.contain('Dolor sit amet');
  })

  it('should wrap each book in an li tag', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('calls componentDidMount', () => {
    spy(BooksList.prototype, 'componentDidMount');
    const mount = renderComponent(BooksList);
    expect(BooksList.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});