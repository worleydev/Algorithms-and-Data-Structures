//P: Two params; divisor is a number that n must be divisible by; bound is the maximum value the number can be
//R: return the largest number that is divisible by divisor and equal to or less than bound
//E: maxMultiple(2,10) => 10; because 10 is divisible by 2 and equal to 10
//P: create for loop with starting value of bound, incrementing down by one;
//   once the num is divisible by divisor, return the num
function maxMultiple(divisor, bound){
    while(bound % divisor !== 0){
      bound--
    } return bound
  }