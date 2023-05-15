function isOdd(num){
    return num % 2 !== 0
}

function insertDash(num){
    
    let output = ''
    let numStr = String(num)

    for(let i = 0; i < numStr.length; i++){
        const currentNum = numStr[i]
        const nextNum = numStr[i+1]

        if(isOdd(currentNum) && isOdd(nextNum) && numStr.length - 1 !== i ){
            output += `${currentNum}-`
        }   else {
            output += currentNum
        }
    }
    return output
}