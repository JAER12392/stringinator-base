const _ = require('../../underbar');

describe('reject()', () => {
    it('rejects odd numbers from an array', () => {
        const nums = [2, 5, 7];
        expect(_.reject(nums, num => num % 2 === 1)).toEqual([2]);
    });

    it('rejects null values from an object', () => {
        const hobbies = {
            outside: 'soccer',
            inside: 'programming',
            bed: null

        };

        const favHob = _.reject(hobbies, (value) => value === null);
        expect(favHob).toEqual(['soccer', 'programming']);
    });
});
