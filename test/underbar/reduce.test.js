const _ = require('../../underbar');

describe('reduce()', () => {
    it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
        const nums = [13, 4, 5, 6];
        const result = _.reduce(nums, (acc, val) => acc + num, 0);
        expect(result).toEqual(28);
    });

    it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
        const nums = [0, 1, 2, 4];
        const results = _.reduce(nums, (a, b) => a + b);
        expect(result).toEqual(7);
    });

});
