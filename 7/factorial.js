function factorial(n)
{
  var ans = []
  if(n < 0 || n > 12){
    throw new RangeError()
  } else if(n === 0){
    ans = 1
  } else {
    for(let i=1; i<=n; i++){
      ans.push(i)
    } ans = ans.reduce((acc,c) => acc * c)
  } return ans
}