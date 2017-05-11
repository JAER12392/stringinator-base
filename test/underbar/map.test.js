const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const array = [2, 4, 6];
    const mappedArray = _.map(arr, (el) => el * el);
    expect(mappedArray).toEqual([4, 16, 36]);
  });
});