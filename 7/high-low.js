// function highAndLow(numbers){
//   return numbers.split(' ').sort((a,b) => b - a).slice(0,2).join(' ')
// }

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }