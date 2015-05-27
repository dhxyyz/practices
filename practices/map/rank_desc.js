'use strict';
var rank_desc = function(collection){
  for (var i = 0; i < collection.length; i++) {
    var array;
    for (var y = i+1; y < collection.length; y++) {
      if (collection[i]>collection[y]) {
        array=collection[i];
        collection[i]=collection[y];
        collection[y]=array;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
