const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 3, 1, 5, 5, 6, 6];
    expect(_.uniq(nums)).toEqual([1, 3, 5, 6]);
  });
});