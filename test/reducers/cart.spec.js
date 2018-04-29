import { expect } from '../test_helper';
import { cartReducers } from '../../src/reducers/cart';
import {ADD_TO_CART} from "../../src/actions/types";

describe('Cart Reducer', () => {
  it('handles action with unknown type', () => {
    expect(cartReducers(undefined, {})).to.eql({cart:[]});
  });

  it('handles action of type ADD_TO_CART', () => {
    const action = { type: ADD_TO_CART, payload: [{ id: 2 }] };
    expect(cartReducers({cart:[{id:1}]}, action)).to.eql({cart: [{ id: 1}, { id: 2 }]});
  });
});
