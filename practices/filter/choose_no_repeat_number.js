'use strict';

function choose_no_repeat_number(collection) {
  //var _ = require ('../lodash');
  //return _.union(collection);
  var decide = true;
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection[i]===collection_a[j]) {
        break;
      }
    }
    if (decide) {
      collection_a.push(collection[i]);
    }
  }
  return collection_a;
}

module.exports = choose_no_repeat_number;
