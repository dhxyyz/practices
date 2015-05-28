'use strict';

function calculate_elements_sum(collection, element) {
  var index;
  for (var i = 0; i < collection.length; i++) {
    if (element===collection[i]) {
      index = i;
    }
  }
  return index;
}

module.exports = calculate_elements_sum;
