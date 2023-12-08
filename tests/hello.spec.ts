import { expect } from "chai";
import { Hello } from '../src/hello';

describe('Test hello world', () => {
  it('test_init_do_nothing', () => {
    let sut = new Hello()
    expect(sut.show('daisy')).to.be.equal('hello daisy');
  });
});