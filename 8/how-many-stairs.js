function stairsIn20(s){
    let summed = day => day.reduce((acc,c) => acc + c, 0)
    return s.reduce((acc,c) => acc + summed(c), 0) * 20
  }