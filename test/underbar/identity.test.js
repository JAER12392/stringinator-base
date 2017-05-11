const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(9)).toBe(9);
  });

  it('returns the same array if given an array', () => {
    var zeus = ['Z', 'e', 'u', 's'];
    expect(_.identity(zeus)).toBe(zeus);
  });

  it('returns the same object if given an object', () => {
    const obj = {a : 'hello'};
    expect(_.identity(obj)).toBe(obj);
  });
});