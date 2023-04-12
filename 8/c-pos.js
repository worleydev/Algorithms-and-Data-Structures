function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
      return [];
    }
    const length = input.filter(n => n > 0).length
    const summed = input.filter(n => n < 0).reduce((acc,c) => acc + c,0)
    return [length, summed]
  }