var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

// Returns the first element of an array.
_.first = function (array) {
  // Place your solution here
  return array[0];
};

// Returns the first n number of elements in an array.
_.take = function (array, n) {
  if (n === undefined) {
    n = 1;
  }

  return array.slice(0, n);
  // Place your solution here
};

// Returns the last element of an array.
_.last = function (array) {
  return array[array.length - 1];
  // Place your solution here
};

// Returns the last n number of elements in an array.
_.takeRight = function (array, n) {
  if (n === undefined) {
    n = 1;
  }

  return array.slice(-n);
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }

  return newArr;

};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function (arrayOne, arrayTwo) {
  var newArr = [];
  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayTwo.indexOf(arrayOne[i]) === -1) {
      newArr.push(arrayOne[i]);
    }
  }

  return newArr;
};

// Returns element with minimum
// value in an array.
_.min = function (array) {
  var small = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < small) {
      small = array[i];
    }
  }

  return small;
};

// Returns element with maximum
// value in an array.
_.max = function (array) {
  var big = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > big) {
      big = array[i];
    }
  }

  return big;
};

// Returns either index of matched element or
// -1.
_.indexOf = function (array, el) {
  return array.indexOf(el);
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function (array) {

};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function (collection) {
  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  } else {
    return collection.length;
  }
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function (collection, callback) {
  // Place your solution here
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function (collection, callback) {
  // Place your solution here
};

// Returns a new collection with filtered elements.
_.filter = function (collection, callback) {
  // Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function (collection, callback) {
  // Place your solution here
};

/*************** BONUS ***************/
// Returns n number of elements in a collection.
_.sample = function (collection, n) {
  // Place your solution here
};

module.exports = _;
