import { assert } from 'chai';
import Calculator from '../src/calculator';

describe.only('ASYNC AWAIT PROMISE TEST SUITE', () => {
  let calc: Calculator;

  it('should work with async and await', async () => {
    calc = new Calculator();
    const result = await calc.asyncFunctionPromise();
    assert.equal(result, 4)
  })
})