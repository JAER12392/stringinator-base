const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = ['Hack Reactor', 'San Francisco', 'Barcelona'];
    expect(_.indexOf(array, 'Hack Reactor')).toBe(0); 
  });

  it('returns the index of a value at the end of an array', () => {
    const array = ['Hack Reactor', 'San Francisco', 'Barcelona'];
    expect(_.indexOf(array, 'Barcelona')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const array = ['Hack Reactor', 'San Francisco', 'Barcelona'];
    expect(_.indexOf(array, 'Real Madrid')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = ['Hack Reactor', 'Hack Reactor', 'San Francisco', 'Barcelona'];
    expect(_.indexOf(array, 'Hack Reactor')).toBe(0);
  });

  it('starts searching at the given offset', () => {
    const array = ['Hack Reactor', 'San Francisco', 'Barcelona', 'San Francisco', 'San Francisco'];
    expect(_.indexOf(array, 'San Francisco', 2)).toBe(3);
  });

});