import { expect, should, assert} from "chai";

describe('BDD EXPECT style', () => {
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

describe('BDD SHOULD style', () => {
  it('SHOULD assertion style', () => {
    //Instantiate should
    should();

    //Arrange
    const name: string = 'yuji';
    const age: number = 17;
    const boolData: boolean = true;
    const objData: Object = { name: 'yuji', age: 17 };
    const arrData: number[] = [1,2,3];

    //Act

    //Assert
    //string
    name.should.be.ok;
    name.should.be.a('string');
    name.should.be.equal('yuji');
    //number
    age.should.be.ok;
    age.should.be.a('number');
    age.should.be.equal(17);
    //boolean
    boolData.should.be.ok;
    boolData.should.be.a('boolean');
    boolData.should.be.true;
    //object
    objData.should.be.ok;
    objData.should.be.a('object');
    objData.should.have.property('name').equal('yuji');
    objData.should.have.property('age').equal(17);
    //array
    arrData.should.be.ok;
    arrData.should.be.a('array');
    arrData.should.have.lengthOf(3).that.include(2);
    arrData.should.not.have.lengthOf(4).that.does.not.include(5);
  });
});

describe('TDD assertion style', () => {
  it('ASSERT style', () => {
    //Instantiate should
    should();

    //Arrange
    const name: string = 'yuji';
    const age: number = 17;
    const boolData: boolean = true;
    const objData: Object = { name: 'yuji', age: 17 };
    const arrData: number[] = [1,2,3];

    //Act

    //Assert
    //string
    assert.isOk(name);
    assert.typeOf(name, 'string');
    assert.equal(name, 'yuji');
    //number
    assert.isOk(age);
    assert.typeOf(age, 'number');
    assert.equal(age, 17);
    //boolean
    assert.isOk(boolData);
    assert.typeOf(boolData, 'boolean');
    assert.equal(boolData, true);
    //object
    assert.isOk(objData);
    assert.typeOf(objData, 'object');
    assert.deepEqual(objData, { name: 'yuji', age: 17 });
    //array
    assert.isOk(arrData);
    assert.typeOf(arrData, 'array');
    assert.deepEqual(arrData, [1,2,3]);
    assert.include(arrData, 2);
  });
});