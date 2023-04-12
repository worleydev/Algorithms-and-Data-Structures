const flip=(d, a)=>{
    return d == 'R' ? a.sort((n,m) => n - m) : a.sort((n,m) => m - n)
  }