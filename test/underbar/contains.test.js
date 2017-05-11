const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const array = [1, 2, 3, 4];
    const result = _.contains(array, 4);
    expect(result).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const array = [1, 2, 3, 4];
    const result = _.contains(array, 5);
    expect(result).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      wow : 'hello',
      yo : 4,
      HR : 9
    },
    const result = _.contains(obj, 4);
    expect(result).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      wow : 'hello',
      yo : 4,
      HR : 9
    },
    const result = _.contains(obj, 6);
    expect(result).toBe(false);
  });

});