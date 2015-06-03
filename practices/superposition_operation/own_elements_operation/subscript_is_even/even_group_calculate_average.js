'use strict';
var even_group_calculate_average = function(collection){
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection%2===0) {
      array.push(collection[i]);
    }
  }
  var array_a = [];
  var k = 0;
  var number = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i]/10<1) {
      number = number + array;
      k++;
    }
  }
};
module.exports = even_group_calculate_average;
