function pillars(numPill, dist, width) {
    if (numPill === 1) return 0
    else return numPill == 1  ? 0 : ((numPill-2)*width) + ((100*dist)*(numPill-1)) 
  }