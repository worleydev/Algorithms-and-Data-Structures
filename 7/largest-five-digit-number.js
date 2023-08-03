//P: single param, a single digit as large as 1000 digits
//R: return the largest integer from this list of digits, without changing original order
//E: 4693028763 => 93028, because it is the largest 5 dig number from within the digits
//P: declare an answer to store the highest 5 dig number; use for loop to check the sequence of digits
//   for the largest number; reassign ans to this highest digit;
function solution(digits){
    let ans = 0
    for(let i=0; i<digits.length; i++){
      if(Number(digits.substring(i,i+5)) > ans){
        ans = digits.substring(i, i+5)
      }
    } return Number(ans)
  }