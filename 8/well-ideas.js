function well(x){
    let checkX = x.filter(v => v == 'good').length
    return checkX < 1 ? 'Fail!' :
           checkX < 3 ? 'Publish!' : 'I smell a series!'
  }