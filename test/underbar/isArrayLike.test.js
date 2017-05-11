const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike(['This', 'is', 'an', 'array'])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const seattle = {
      length : 99
    };
    expect(_.isArrayLike(seattle)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArr = {
      'myBrother' : 'Cesar Esquivel' 
    };
    expect(_.isArrayLike(nonArr)).toBe(false);
  });
});
