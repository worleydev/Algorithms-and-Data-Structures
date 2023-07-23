function elevator(left, right, call){
    let distance = d => Math.abs(call - d)
    return distance(left) >= distance(right) ? 'right' : 'left'
  }