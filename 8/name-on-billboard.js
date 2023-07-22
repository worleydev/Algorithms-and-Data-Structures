function billboard(name, price = 30){
    return name.split('').map(el => el = price).reduce((acc,c) => acc + c, 0)
  } 