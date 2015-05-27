'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var _ = require ('../lodash');

  var a = [];

  for (var i = 0; i < collection_b.length; i++) {
    var evens = _.remove(collection_a, function(n) { return n % collection_b[i] === 0; });
    a.push(evens);
  }
  var b = _.flatten(a);
  return b;
}

module.exports = choose_divisible_integer;
