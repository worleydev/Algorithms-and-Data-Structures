function countPositivesSumNegatives(input) {
    if(input == null || input.length < 1){
      return []
    }
      const filtered = input.filter(n => n > 0).length
      const summed = input.filter(n => n < 0).reduce((a, b) => a + b, 0)
      return [filtered, summed]
  }