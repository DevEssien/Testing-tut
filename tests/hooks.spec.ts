import { assert } from 'chai'

describe.only('HOOKS Test', () => {
  before(() => {
    console.log('before any test case');
  });
  beforeEach(() => {
    console.log('before each test case');
  });
  it('true is true', () => {
    assert.equal('true', 'true');
  });
  it('should be equal to 2', () => {
    assert.equal(2, 2);
  });
  afterEach(() => {
    console.log('after each test case');
  });
  after(() => {
    console.log('after all test cases');
  });
});