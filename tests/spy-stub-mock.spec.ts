import { assert, expect } from 'chai';
import Calculator from '../src/calculator';
import sinon, { SinonSpy, SinonStub } from 'sinon';

describe.only('TEST WITH SPY, STUD, NOCK', () => {
  let spy: SinonSpy
  let stub: SinonStub
  let calc: Calculator;

  before(() => {
    calc = new Calculator();
  });

  describe('ADD test suite', () => {
    it('should return sum', () => {
      spy = sinon.spy(calc, 'add');
      stub = sinon.stub(calc, 'getRandomValue').returns(2);

      const result = calc.add(2, 3);

      assert.equal(result, 7);
      assert.strictEqual(spy.calledOnceWith(2, 3), true);

      spy.restore();
      stub.restore();
    });
  });

  describe('SUBTRACT test suite', () => {
    it('should return subtraction', () => {
      spy = sinon.spy(calc, 'subtract');

      const result = calc.subtract(3, 2);
  
      assert.equal(result, 1);
      assert.strictEqual(spy.calledOnceWith(3,2), true);

      spy.restore();
    });
  });
})