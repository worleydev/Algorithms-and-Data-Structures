function remove (string) {
    return string.split('').filter(el => el !== '!').join('') + '!' 
  }