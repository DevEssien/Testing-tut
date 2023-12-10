import { expect, assert } from 'chai';
import Calculator from '../src/calculator';

//test suite - describe()
//test case - it()

describe('TEST CALCULATOR CLASS', () => {
  let calc: Calculator;
  before(() => {
    calc = new Calculator();
  });
  // describe('ADD test suite', () => {
  //   it('should return sum', () => {
  //     const result = calc.add(2, 3);

  //     expect(result).to.equal(5);
  //   });
  // });

  // describe('SUBTRACT test suite', () => {
  //   it('should return subtraction', () => {
  //     const result = calc.subtract(3, 2);
  
  //     expect(result).to.equal(1);
  //   });
  // });

  describe('DIVIDE test suite', () => {
    it('should return divide', () => {
      const result = calc.divide(10, 2);
      expect(result).to.equal(5);
      expect(() => calc.divide(10, 0)).to.throw('Cannot divide by zero')
    });
    it('should throw an error when dividing by zero', () => {
      const result = calc.multiply(10, 2);
      expect(() => calc.divide(10, 0)).to.throw('Cannot divide by zero')
    });
  })

  describe('MULTIPLY test suite', () => {
    it('should return multiplication', () => {
      const result = calc.multiply(10, 2);
      expect(result).to.equal(20);
    });
  });

  describe('RANDOM NUMBER test suite', () => {
    it('should return random value from 1 to 10', () => {
      const result = calc.getRandomValue();
      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 10);
    });
  });
  describe('LOG MESSAGE test suite', () => {
    it('should return a  logging string message', () => {
      const result = calc.logMessage('hello');
      
      assert.isOk(result);
      assert.typeOf(result, 'string');
    });
  });
});