function gimme (triplet) {
    var clone = triplet.slice(0)
    var sorted = clone.sort((a,b) => a - b)
    return triplet.indexOf(sorted[1]) 
  }