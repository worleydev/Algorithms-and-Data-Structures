
function minSum(arr) {
    const sorted = arr.sort((a,b) => a - b)
    const mapped = sorted.map((el,ind) => el * sorted[sorted.length - 1 - ind])
    return mapped.reduce((acc,c) => acc + c, 0) / 2
  }




