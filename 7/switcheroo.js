function switcheroo(x){
  return x.split('').map(el => el === 'a' ? el.replace('a', 'b') : el === 'b' ? el.replace('b', 'a') : el).join('')
}