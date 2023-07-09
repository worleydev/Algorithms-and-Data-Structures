function pipeFix(numbers){
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    let ans = []
    for(let i=min; i<=max; i++){
      ans.push(i)
    }
    return ans
  }