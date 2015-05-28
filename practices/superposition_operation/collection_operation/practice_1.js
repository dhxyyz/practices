'use strict';

function hybrid_operation(collection) {
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
      number = number + collection[i]*3 + 2;
  }
  return number;
}

module.exports = hybrid_operation;
