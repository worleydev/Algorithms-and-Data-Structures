function evenNumbers(array, number) {
    const filtered = array.filter(el => el % 2 === 0)
    return filtered.slice(filtered.length - number )
  }