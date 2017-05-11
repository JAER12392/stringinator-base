const _ = require('./underbar');

const first = function(str, n) {
    return _.first(str, n);
};

const last = function(str, n) {
    return _.last(str, n);
};

const removeChar = function(str, target) {
    // hint: use _.reject
    const array = _.reject(str, (val) => (val === target));
    return array.join('');
};

const hasChar = function(str, target) {
    // hint: use _.some
    return _.some(str, (val) => !!(val === target));
};

const isOnlyDigits = function(str) {
    return _.every(str, (el) => (isNaN(el) === false));
};

const filterToOnlyDigits = function(str) {
    const array = _.filter(str, (el) => (el = parseInt(el), !isNaN(el)));
    return array.join('');
};

const truncateString = function(val, maxLength) {
    // A freebie solution, this is the ONLY method here that doesn't use Underbar.
    return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
    return _.map(obj, (el) => (truncateString(el, maxLength)));
};

const countChars = function(str) {
    str.split('');
    return _.reduce(str, function(obj, letter) {
        if (obj[letter] === undefined) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
        return obj;
    }, {});
};

const dedup = function(str) {
  var str = _.uniq(str)
    return str.join('');
};

module.exports = {
    first: first,
    last: last,
    hasChar: hasChar,
    removeChar: removeChar,
    isOnlyDigits: isOnlyDigits,
    filterToOnlyDigits: filterToOnlyDigits,
    countChars: countChars,
    dedup: dedup,
    truncateLongItems: truncateLongItems,
    truncateString: truncateString
};
