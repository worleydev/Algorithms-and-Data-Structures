function arrayMadness(a, b) {
    return a.map(el => el*el).reduce((acc,c) => acc + c, 0) > b.map(el => el**3).reduce((acc,c) => acc + c, 0)
  }

  function bestArrayMadness(a,b){
    return a.reduce((acc,c) => acc + c*c, 0) > b.reduce((acc,c) => acc + c**3, 0)
  }