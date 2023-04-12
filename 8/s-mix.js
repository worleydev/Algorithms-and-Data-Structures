function sumMix(x){
    let num = x.map(n => Number(n))
    return num.reduce((a,b) => a + b, 0)
  }