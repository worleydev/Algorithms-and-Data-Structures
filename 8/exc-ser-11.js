function replace(s){
    return s.split('').map(el => 'aeiouAEIOU'.includes(el) ? '!' : el).join('')
  }