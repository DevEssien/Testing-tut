import { expect } from "chai";

describe('assert style', () => {
  it('EXPECT assertion style', () => {
    //Arrange
    const name: string = 'yuji';
    const age: number = 17;
    const boolData: boolean = true;
    const objData: Object = { name: 'yuji', age: 17 };
    const arrData: number[] = [1,2,3];

    //Act

    //Assert
    //string
    expect(name).to.be.ok;
    expect(name).to.be.a('string');
    expect(name).to.be.equal('yuji');
    //number
    expect(age).to.be.ok;
    expect(age).to.be.a('number');
    expect(age).to.be.equal(17);
    //boolean
    expect(boolData).to.be.ok;
    expect(boolData).to.be.a('boolean');
    expect(boolData).to.be.true;
    //object
    expect(objData).to.be.ok;
    expect(objData).to.be.a('object');
    expect(objData).to.have.property('name').equal('yuji');
    expect(objData).to.have.property('age').equal(17);
    //array
    expect(arrData).to.be.ok;
    expect(arrData).to.be.a('array');
    expect(arrData).to.have.lengthOf(3).that.include(2);
    expect(arrData).to.not.have.lengthOf(4).that.does.not.include(5);
  });
});