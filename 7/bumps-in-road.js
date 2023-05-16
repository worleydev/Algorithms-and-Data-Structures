function bump(x){
    return x.split('').filter(el => el == 'n').length < 16 ? 'Woohoo!' : 'Car Dead'
  }