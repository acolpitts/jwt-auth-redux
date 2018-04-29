import { expect } from '../test_helper';
import { booksReducers } from '../../src/reducers/books';
import {POST_BOOK} from "../../src/actions/types";

describe('Books Reducer', () => {
  it('handles action with unknown type', () => {
    expect(booksReducers(undefined, {})).to.eql({books:[]});
  });

  it('handles action of type POST_BOOK', () => {
    const action = { type: POST_BOOK, payload: [{ id: 1, title: 'test book' }] };
    expect(booksReducers({books:[]}, action)).to.eql({books: [{ id: 1, title: 'test book' }]});
  });
});
