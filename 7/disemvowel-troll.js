function disemvowel(str) {
    return str.split('').filter(el => !'aeiouAEIOU'.includes(el)).join('')
  }