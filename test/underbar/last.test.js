const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(["hello", "how", "are", "you"])).toEqual("you");
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(["hello", "how", "are", "you"], 2)).toEqual(["are", "you"]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(["hello", "how", "are"], 6)).toEqual(["hello", "how", "are"]);
  });
});