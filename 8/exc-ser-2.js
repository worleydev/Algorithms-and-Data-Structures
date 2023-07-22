function remove (string) {  
    const split = string.split('')
    for(let i=split.length - 1; i>0; i--){
      if(split[i] === '!'){
        split.pop()
      } else {
        break
      }
    }
    return split.join('')
  }