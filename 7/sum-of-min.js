function sumOfMinimums(arr) {
    let ans = 0
    const mapped = arr.map(el => el.sort((a,b) => a - b))
    for(let i=0; i<arr.length; i++){
      ans += mapped[i][0]
    }
    return ans
  }