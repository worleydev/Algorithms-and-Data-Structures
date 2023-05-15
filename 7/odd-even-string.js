function sortMyString(S){
    S = S.split('')
    let evens = []
    let odds = []

    for(let i=0; i<S.length; i++){

        if(i % 2 == 0){
            evens.push(S[i])
        } else {
            odds.push(S[i])
        }
    }
    return evens.join('') + ' ' + odds.join('')
}





const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}