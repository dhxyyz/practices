'use strict';

function hybrid_operation_to_uneven(collection) {
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===1) {
      number = number + collection[i] * 3 + 5;
    }
  }
  return number;
}

module.exports = hybrid_operation_to_uneven;
