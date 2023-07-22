//P: sq : number
//R: if sq is perfect sq, return next perfect square; if not, return -1
function findNextSquare(sq) {
    return Math.sqrt(sq)  != Math.sqrt(sq).toFixed() ? -1 : ((Math.sqrt(sq) + 1)**2) 
  }