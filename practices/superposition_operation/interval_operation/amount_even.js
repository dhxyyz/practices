'use strict';

function amount_even(collection) {
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      number = number + collection[i];
    }
  }
  return number;
}

module.exports = amount_even;
