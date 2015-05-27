'use strict';

function choose_no_common_elements(collection_a, collection_b) {
//  var _ = require ('../lodash');
//  return _.xor(collection_a, collection_b);
  var collection = [];
  for (var i = 0; i < collection_a.length; i++) {
    var test = true;
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i]===collection_b[j]) {
        test = false;
        break;
      }
    }
    if (test) {
      collection.push(collection_a[i]);
      test = true;
    }
  }
  return collection;
}

module.exports = choose_no_common_elements;
