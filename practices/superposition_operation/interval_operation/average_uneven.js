'use strict';

function average_uneven(collection) {
  var number = 0;
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===1) {
      number = number + collection[i];
      count ++;
    }
  }
  return number/count;
}

module.exports = average_uneven;
