'use strict';

function choose_divisible_integer(collection_a, collection_b) {
//  var collection = [];
//  _filter_in(collection_a,function(){  
//  });

  var collection = [];
  for (var i = 0; i < collection_a.length; i++) {
    var test = false;
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i]%collection_b[j]===0) {
        test = true;
      }
    }
    if (test) {
      collection.push(collection_a[i]);
       test = false;
    }
  }
  return collection;
}

module.exports = choose_divisible_integer;
