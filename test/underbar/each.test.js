const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
     const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count ++;
    });
    expect(count).toBe(6)
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrayObj, function(element, index, iteratedArrayObj) {
      expect(element).toEqual(iteratedArrayObj[index]);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      dude : "hello",
      where : "Africa",
      brother: "East",
      why: "man"
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count++;
    });
    expect(count).toBe(4);
  });
});

