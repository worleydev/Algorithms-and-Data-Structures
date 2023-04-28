function century(year) {
    let ccount = 0
    while (year > 0){
      year = year - 100
      ccount = ccount + 1
    }
    return ccount
  }
  