const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const numbers = [2, 3, 4, 5];
    expect(_.filter(numbers, num => num % 2 === 1)).toEqual([3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const traveling = {
      place: 'Barcelona',
      cost: 5000,
      currency: 'Euro'
    };

    const ticket = _.filter(traveling, parseInt(value) => !isNaN(value));
    expect(ticket).toEqual([5000]);
  });
});