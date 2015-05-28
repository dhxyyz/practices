'use strict';

function compute_average(collection) {
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
    number = number+collection[i];
  }
  return number/(collection.length);
}

module.exports = compute_average;
