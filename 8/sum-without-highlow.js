function sumArray(array) {
    if (!array) return 0
    if(array.length < 3) return 0
    return array.sort((a,b) => a - b).slice(1, -1).reduce((acc,c) => acc + c)
}

console.log(sumArray([2,3,4,5]))