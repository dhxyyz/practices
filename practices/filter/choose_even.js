'use strict';

function choose_even(collection) {
  //var _ = require ('../lodash');
//  return  _.remove(
//    collection, function(n) {
//  return n % 2 === 0;
//  });
 var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2 === 0) {
      collection_a.push(collection[i]);
    }
  }
 return collection_a;
}

module.exports = choose_even;
