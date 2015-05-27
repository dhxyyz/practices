'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
//  var _= require('../lodash');
//  return _.union(collection_a, collection_b);
//}
  var decide;
  for (var i = 0; i < collection_b.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[i]===collection_b[j]) {
        break;
      }
    }
//      collection_a.pusn(collection_b[i]);
  }
  return collection_a;
}

module.exports = get_union;
