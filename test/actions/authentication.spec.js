import { expect } from '../test_helper';
import { CHANGE_AUTH } from "../../src/actions/types";
import { authenticate } from "../../src/actions/authenticate";

describe('Authentication Actions', () => {
  describe('when updating the autheticated state', () => {
    it('should be the correct type', () => {
      const action = authenticate();
      expect(action.type).to.equal(CHANGE_AUTH);
    })

    it('should have the correct payload', () => {
      const action = authenticate(true);
      expect(action.payload).to.equal(true);
    })
  });
});