function noBoringZeros(n) {
    let num = n.toString().split('')
    while(num[num.length-1] === '0'){
      num.pop()
    }
    return Number(num.join(''))
  }