function XO(str) {
    str = str.toLowerCase()
    let countX = 0
    let countO = 0
    for(let i=0; i<str.length; i++){
      if(str[i] === 'x'){
        countX++
      }else if(str[i] === 'o'){
        countO++
      }
    } return countX === countO
}