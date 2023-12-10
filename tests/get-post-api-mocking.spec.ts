import { assert } from "chai";
import User from '../src/user';
import { userPayload, expectedUserResponse } from '../payload/user';
import nock from 'nock';

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('API TESTING SUITE', () => {
  let user: User;

  describe('GET request suite', () => {
    it('should make Get Request API', async () => {
      user = new User();
      const mockedUserResponse = { id: 1, name: 'Lukas Graham'}

      nock(baseUrl).get('/users/1').reply(200, mockedUserResponse);

      const res = await user.getUser();

      assert.isOk(res.data);
      assert.equal(res.status, 200);
      assert.equal(res.data.id, 1);
    });
  })
  
  describe('Post request suite', () => {
    it('should make POST Request API', async () => {
      user = new User();

      const payload = JSON.parse(userPayload);
      const expectedUserRes = JSON.parse(expectedUserResponse);
      
      nock(baseUrl).post('/users', payload).reply(201, expectedUserRes)

      const res = await user.saveUser(payload);

      assert.isOk(res.data);
      assert.equal(res.status, 201);
      assert.equal(res.data.id, 11);
    });
  })

  after(() => {
    nock.cleanAll();
  });

})