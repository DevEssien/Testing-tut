import { assert } from "chai";
import User from '../src/user';
import userPayload from '../payload/user'

describe.only('API TESTING SUITE', () => {
  let user: User;

  describe('GET request suite', () => {
    it('should make Get Request API', async () => {
      user = new User();
      const res = await user.getUser();
      assert.isOk(res.data);
      assert.equal(res.status, 200);
      assert.equal(res.data.id, 1);
    });
  })
  
  describe('Post request suite', () => {
    it('should make Get Request API', async () => {
      user = new User();
      const payload = JSON.parse(userPayload)
      const res = await user.saveUser(payload);
      assert.isOk(res.data);
      assert.equal(res.status, 201);
      assert.equal(res.data.id, 11);
    });
  })


})