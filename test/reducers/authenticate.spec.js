import { expect } from '../test_helper';
import { authenticationReducer } from '../../src/reducers/authentication';
import {CHANGE_AUTH} from "../../src/actions/types";

describe('Authentication Reducer', () => {
  it('handles action with unknown type', () => {
    expect(authenticationReducer(undefined, {})).to.eql(false);
  });

  it('handles action of type CHANGE_AUTH', () => {
    const action = { type: CHANGE_AUTH, payload: true };
    expect(authenticationReducer({authenticated: false}, action)).to.eql(true);
  });
});
