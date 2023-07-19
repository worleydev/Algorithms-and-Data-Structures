function  calculateAge(b,c) {
    let birthdate = b - c
    if(b === c) return 'You were born this very year!'
    else if(birthdate > 0) return `You will be born in ${+birthdate} ${Math.abs(birthdate) === 1 ? 'year' : 'years'}.`
    else return `You are ${Math.abs(birthdate)} ${Math.abs(birthdate) === 1 ? 'year' : 'years'} old.`
  }
  
  