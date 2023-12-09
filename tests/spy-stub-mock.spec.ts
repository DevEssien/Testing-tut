import { assert, expect } from 'chai';
import Calculator from '../src/calculator';
import sinon, { SinonMock, SinonSpy, SinonStub } from 'sinon';

describe.only('TEST WITH SPY, STUD, MOCK', () => {
  let spy: SinonSpy
  let stub: SinonStub
  let mock: SinonMock;
  let calc: Calculator;

  before(() => {
    calc = new Calculator();
  });

  beforeEach(() => {
    mock = sinon.mock(calc);
  });

  afterEach(() => {
    spy.restore();
    stub.restore();
    mock.restore();
  })

  describe('ADD test suite', () => {
    it('should return sum', () => {
      spy = sinon.spy(calc, 'add');
      stub = sinon.stub(calc, 'getRandomValue').returns(2);

      let expectation = mock.expects('logMessage').exactly(1).withArgs('logging add function');

      const result = calc.add(2, 3);

      assert.equal(result, 7);
      assert.strictEqual(spy.calledOnceWith(2, 3), true);
      expectation.verify();

    });
  });

  describe('SUBTRACT test suite', () => {
    it('should return subtraction', () => {
      spy = sinon.spy(calc, 'subtract');
      // mock = sinon.mock(calc);

      let expectation = mock.expects('logMessage').exactly(1).withArgs('logging subtract function')

      const result = calc.subtract(3, 2);
  
      assert.equal(result, 1);
      assert.strictEqual(spy.calledOnceWith(3,2), true);
      expectation.verify();

      // spy.restore();
    
      // mock.restore();
    });
  });
})