'use strict';

function find_first_even(collection) {
  var number;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      number = collection[i];
      break;
    }
  }
  return number;
}

module.exports = find_first_even;
