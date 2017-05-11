const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [99, 0, 9, 9];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const odd = [3, 3, 3];
      expect(._every(odd, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
       const odd = [3, 3, 4];
      expect(._every(odd, num => num % 2 === 1)).toBe(false);
    });

  });
});