'use strict';

function compare_collections(collection_a, collection_b) {
  var array = true;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a.length===collection_b.length) {
      if (collection_a[i]===collection_b[i]) {
        break;
      }
    }else {
      array = false;
    }
  }
  return array;
}

module.exports = compare_collections;
