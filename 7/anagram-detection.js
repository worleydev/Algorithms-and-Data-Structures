// write the function isAnagram
var isAnagram = function(test, original) {
    return test.split('').map(el => el.toLowerCase()).sort().join('') ==
             original.split('').map(el => el.toLowerCase()).sort().join('')
  };
  