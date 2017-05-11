const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const odd = [2, 3, 4, 6];
    expect(_.some(odd, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const even = [2, 4, 6];
    expect(_.some(even, num => num % 2 === 1)).toBe(false);
  });

});