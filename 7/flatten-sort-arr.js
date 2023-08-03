"use strict";
//P: single parameter, an array containing arrays of numbers
//R: return a single array without nested arrays, with the numbers in ascending order
//E: [[2,3], [3,5]] => [2,3,3,5]
//P: loop through the array concatenating nested arrays; sort the array in ascending order
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b)
}