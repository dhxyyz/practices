'use strict';

function find_last_even(collection) {
  var number;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      number = collection[i];
    }
  }
  return number;
}

module.exports = find_last_even;
