'use strict';

function get_union(collection_a, collection_b) {

//  var _= require('../lodash');
//  return _.union(collection_a, collection_b);
//}

  for (var i = 0; i < collection_b.length; i++) {
    collection_a.push(collection_b[i]);
  }

  var decide = false;
  var collection = [];
  for ( i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (collection[j]===collection_a[i]) {
        decide = true;
      }
    }
    if (!decide) {
      collection.push(collection_a[i]);
    }
    decide = false;
  }

  return collection;

}

module.exports = get_union;
