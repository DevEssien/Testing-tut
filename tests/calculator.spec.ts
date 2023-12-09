import { expect } from 'chai';
import Calculator from '../src/calculator';

describe('Test Calulator Class', () => {
  it('should return sum', () => {
    //Arrange
    const calc = new Calculator();

    //Act
    const result = calc.add(2, 3);

    //Assert
    expect(result).to.equal(5);
  });

  it('should return subtraction', () => {
    const calc = new Calculator();

    const result = calc.subtract(3, 2);

    expect(result).to.equal(1);
  });
  
  it('should return divide', () => {
    const calc = new Calculator();
    const result = calc.divide(10, 2);
    expect(result).to.equal(5);
    expect(() => calc.divide(10, 0)).to.throw('Cannot divide by zero')
  });

  it('should throw an error when dividing by zero', () => {
    const calc = new Calculator();
    const result = calc.multiply(10, 2);
    expect(() => calc.divide(10, 0)).to.throw('Cannot divide by zero')
  });

  it('should return multiplication', () => {
    const calc = new Calculator();
    const result = calc.multiply(10, 2);
    expect(result).to.equal(20);
  });
})