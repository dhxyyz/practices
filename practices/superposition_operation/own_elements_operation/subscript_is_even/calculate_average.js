'use strict';
var calculate_average = function(collection){
  var number = 0;
  var k = 0;
  for (var i = 1; i < collection.length; i+=2) {
    number = number + collection[i];
    k++;
  }
  return number/k;
};
module.exports = calculate_average;
